/**
 * CoverageMap
 * Interactive Leaflet map with:
 *  - Carto Light basemap (premium, clean aesthetic)
 *  - GeoJSON coverage zones from local JSON
 *  - Click-to-drop-pin
 *  - Smooth fly-to on search selection
 *  - Hover tooltip for zones
 *  - Custom SVG marker for selected point
 */

import { useEffect, useRef } from 'react';
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  Marker,
  useMapEvents,
  useMap,
} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { getActiveZones } from '../../utils/coverageUtils';
import { STATUS_CONFIG } from '../../utils/statusConfig';
import CoverageLegend from './CoverageLegend';

// ── Default map view centred on Harare, Zimbabwe ──────────────────────────────
const DEFAULT_CENTER = [-17.83, 31.05];
const DEFAULT_ZOOM = 12;

// ── Custom SVG pin icon ───────────────────────────────────────────────────────
const createPinIcon = (color = '#030568') =>
  L.divIcon({
    className: '',
    html: `
      <div style="
        width: 30px; height: 30px;
        background: ${color};
        border: 3px solid white;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        box-shadow: 0 4px 14px rgba(0,0,0,0.28);
      "></div>
    `,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -34],
  });

// ── Polygon style per status ──────────────────────────────────────────────────
function getPolygonStyle(status) {
  const cfg = STATUS_CONFIG[status] || STATUS_CONFIG.NOT_AVAILABLE;
  return {
    color: cfg.color,
    fillColor: cfg.fillColor,
    fillOpacity: cfg.fillOpacity,
    weight: cfg.weight,
    dashArray: status === 'PLANNED' || status === 'INVESTIGATION' ? '6 4' : null,
  };
}

// ── FlyToLocation: flies map to a position when it changes ───────────────────
function FlyToLocation({ position }) {
  const map = useMap();
  const prevPosition = useRef(null);

  useEffect(() => {
    if (!position) return;
    const [lat, lng] = position;
    // Avoid re-flying to the exact same point
    if (
      prevPosition.current &&
      prevPosition.current[0] === lat &&
      prevPosition.current[1] === lng
    )
      return;
    prevPosition.current = position;
    map.flyTo([lat, lng], 15, { duration: 1.4, easeLinearity: 0.35 });
  }, [position, map]);

  return null;
}

// ── MapClickHandler ───────────────────────────────────────────────────────────
function MapClickHandler({ onMapClick }) {
  useMapEvents({
    click(e) {
      onMapClick(e.latlng.lat, e.latlng.lng);
    },
  });
  return null;
}

// ── Main CoverageMap component ────────────────────────────────────────────────
const CoverageMap = ({ selectedPosition, onMapClick, selectedStatus }) => {
  const activeZones = getActiveZones();

  const pinColor =
    selectedStatus && STATUS_CONFIG[selectedStatus]
      ? STATUS_CONFIG[selectedStatus].color
      : '#030568';

  return (
    <div className="relative h-full w-full">
      <div className="pointer-events-none absolute inset-0 z-[350] bg-[radial-gradient(circle_at_top_right,rgba(253,204,0,0.16),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(3,5,104,0.14),transparent_28%)]" />
      <MapContainer
        center={DEFAULT_CENTER}
        zoom={DEFAULT_ZOOM}
        className="h-full w-full"
        zoomControl={false}
        attributionControl={true}
      >
        {/* ── Carto Light basemap (clean premium look) ── */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          subdomains="abcd"
          maxZoom={19}
        />

        {/* ── Coverage zone polygons ── */}
        {activeZones.map((zone) => (
          <GeoJSON
            key={zone.id}
            data={zone.polygonGeoJson}
            style={() => getPolygonStyle(zone.status)}
            onEachFeature={(feature, layer) => {
              const cfg = STATUS_CONFIG[zone.status] || STATUS_CONFIG.NOT_AVAILABLE;
              layer.bindTooltip(
                `<div style="font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 600; padding: 4px 2px;">
                  <div style="font-size: 13px; font-weight: 800; color: #030568; margin-bottom: 2px;">${zone.suburb}</div>
                  <div style="
                    display: inline-block;
                    background: ${cfg.fillColor}28;
                    color: ${cfg.color};
                    border: 1px solid ${cfg.color}44;
                    border-radius: 9999px;
                    padding: 1px 8px;
                    font-size: 10px;
                    font-weight: 700;
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                  ">${cfg.label}</div>
                </div>`,
                {
                  sticky: true,
                  className: 'fh-tooltip',
                  direction: 'top',
                  offset: [0, -4],
                }
              );
            }}
          />
        ))}

        {/* ── Selected location marker ── */}
        {selectedPosition && (
          <Marker
            position={selectedPosition}
            icon={createPinIcon(pinColor)}
          />
        )}

        {/* ── Fly-to behavior ── */}
        <FlyToLocation position={selectedPosition} />

        {/* ── Click handler ── */}
        <MapClickHandler onMapClick={onMapClick} />
      </MapContainer>

      <div className="pointer-events-none absolute left-4 top-4 z-[1000] rounded-full border border-white/70 bg-white/92 px-4 py-2 shadow-[0_14px_35px_rgba(3,5,104,0.12)] backdrop-blur-sm">
        <span className="text-[10px] font-black uppercase tracking-[0.28em] text-primary-container">
          Fibrehood Zones
        </span>
      </div>

      {/* ── Legend (outside MapContainer but overlaid) ── */}
      <CoverageLegend />
    </div>
  );
};

export default CoverageMap;
