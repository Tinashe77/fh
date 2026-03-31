/**
 * coverageUtils.js
 * Frontend-only Phase 1 coverage check logic using Turf.js.
 *
 * Phase 2 upgrade path:
 *   - Replace the `coverageZones` import with an API call (e.g. GET /api/zones)
 *   - Move `checkCoverage` to a server-side function or keep it here
 *     and hydrate zones from the API response instead of the local JSON.
 *   - The function signatures remain the same, so call sites do not need to change.
 */

import * as turf from '@turf/turf';
import coverageZones from '../data/coverageZones.json';
import { STATUS_PRIORITY } from './statusConfig';

/**
 * Load all active coverage zones.
 *
 * Phase 2 note: Replace this with `await fetch('/api/zones').then(r => r.json())`
 * and call it once at app startup or inside the hook.
 *
 * @returns {Array} Array of active zone objects from the JSON file
 */
export function getActiveZones() {
  return coverageZones.filter((zone) => zone.isActive);
}

/**
 * Check whether a geographic point falls inside any coverage polygon.
 *
 * Algorithm:
 *  1. Build a Turf point from the coordinates (GeoJSON: [lng, lat])
 *  2. Filter to active zones only
 *  3. Test each zone polygon using Turf booleanPointInPolygon
 *  4. Collect all matches
 *  5. Sort by STATUS_PRIORITY (highest wins)
 *  6. Return the best match, or NOT_AVAILABLE if none matched
 *
 * @param {number} lat  - Latitude of the point to check
 * @param {number} lng  - Longitude of the point to check
 * @returns {{ matched: boolean, zone: object|null, status: string }}
 */
export function checkCoverage(lat, lng) {
  // GeoJSON convention: coordinates are [longitude, latitude]
  const point = turf.point([lng, lat]);

  const activeZones = getActiveZones();

  const matchedZones = activeZones.filter((zone) => {
    try {
      const polygon = turf.polygon(zone.polygonGeoJson.coordinates);
      return turf.booleanPointInPolygon(point, polygon);
    } catch (err) {
      console.warn(`[coverageUtils] Invalid polygon for zone "${zone.id}":`, err);
      return false;
    }
  });

  if (matchedZones.length === 0) {
    return { matched: false, zone: null, status: 'NOT_AVAILABLE' };
  }

  // Sort descending by priority — highest priority status wins
  const sorted = [...matchedZones].sort(
    (a, b) => (STATUS_PRIORITY[b.status] ?? 0) - (STATUS_PRIORITY[a.status] ?? 0)
  );

  return { matched: true, zone: sorted[0], status: sorted[0].status };
}
