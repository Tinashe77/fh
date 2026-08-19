/**
 * CoverageSection
 * Main orchestrator for the coverage check experience.
 * Composes: CoverageSearchBar → CoverageMap → CoverageResultCard → forms
 *
 * Phase 2 upgrade path:
 *   - useCoverageCheck will transparently swap to API calls
 *   - Form components will POST to real endpoints
 *   - No structural changes needed here
 */

import { useEffect, useState, Suspense, lazy, forwardRef } from 'react';
import { useCoverageCheck } from '../../hooks/useCoverageCheck';
import CoverageSearchBar from './CoverageSearchBar';
import CoverageResultCard from './CoverageResultCard';

// Lazy-load Leaflet map to avoid SSR issues and improve initial load
const CoverageMap = lazy(() => import('./CoverageMap'));
const RegisterInterestForm = lazy(() => import('./RegisterInterestForm'));
const GetConnectedForm = lazy(() => import('./GetConnectedForm'));

// ── Map loading skeleton ──────────────────────────────────────────────────────
const MapSkeleton = () => (
  <div className="h-full w-full flex items-center justify-center rounded-[1.75rem] bg-[linear-gradient(180deg,#f7f8fc_0%,#eef1f7_100%)]">
    <div className="flex flex-col items-center gap-3 text-on-surface-variant">
      <svg className="w-8 h-8 animate-spin text-primary-container/50" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
      </svg>
      <p className="text-sm font-medium">Loading map…</p>
    </div>
  </div>
);

// ── CoverageSection ───────────────────────────────────────────────────────────
const CoverageSection = forwardRef(({ externalSearch, autoLocate = false }, ref) => {
  const { result, isChecking, error, check, reset } = useCoverageCheck();

  // Selected pin position for the map [lat, lng] | null
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [locationPromptError, setLocationPromptError] = useState('');

  // Active modal: null | 'registerInterest' | 'getConnected'
  const [activeModal, setActiveModal] = useState(null);
  const [modalPrefill, setModalPrefill] = useState({});

  // ── Handlers ───────────────────────────────────────────────────────────────
  const handleLocationSelect = (lat, lng, address) => {
    setSelectedPosition([lat, lng]);
    check(lat, lng, address);
  };

  const handleMapClick = (lat, lng) => {
    setSelectedPosition([lat, lng]);
    check(lat, lng, null); // will reverse geocode
  };

  const handleReset = () => {
    reset();
    setSelectedPosition(null);
  };

  const handleCTAClick = (formType, checkResult) => {
    // Pre-fill forms with the checked address if available
    const addressParts = checkResult?.address?.split(', ') || [];
    setModalPrefill({
      prefillAddress: addressParts[0] || '',
      prefillSuburb: checkResult?.zone?.suburb || addressParts[1] || '',
      prefillCity: checkResult?.zone?.city || addressParts[2] || 'Harare',
    });
    setActiveModal(formType);
  };

  useEffect(() => {
    if (!autoLocate) return;

    if (!navigator.geolocation) {
      setLocationPromptError('Location sharing is not supported by your browser.');
      return;
    }

    setLocationPromptError('');
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        handleLocationSelect(latitude, longitude, null);
      },
      () => {
        setLocationPromptError('Location access was not granted. Use the My Location button or click the map to share your coordinates.');
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoLocate]);

  const handleCloseModal = () => {
    setActiveModal(null);
    setModalPrefill({});
  };

  return (
    <section ref={ref} className="cp-coverage-section">
      <div className="cp-search-card">
        <h2>Check if Fibrehood is available in your area</h2>
        <p>Search by suburb, estate or street address to see if we&apos;re in your area.</p>
        <CoverageSearchBar
          onLocationSelect={handleLocationSelect}
          isChecking={isChecking}
          externalSearch={externalSearch}
        />

        {error && (
          <div className="cp-alert is-error">
            <span className="material-symbols-outlined">error</span>
            <p>{error}</p>
          </div>
        )}

        {locationPromptError && (
          <div className="cp-alert is-warning">
            <span className="material-symbols-outlined">my_location</span>
            <p>{locationPromptError}</p>
          </div>
        )}

        {isChecking && (
          <div className="cp-alert is-info">
            <svg className="h-4 w-4 animate-spin shrink-0" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
            <p>Checking coverage for this location...</p>
          </div>
        )}
      </div>

      <div className="cp-map-panel">
        <aside className="cp-rollout-copy">
          <p className="cp-small-label">Rollout Map</p>
          <h2>Southview Park rollout zones</h2>
          <p>Live view of our fibre rollout. Click on a zone to see more details.</p>

          <div className="cp-map-legend">
            <span><i className="is-live" /> Live (Now Available)</span>
            <span><i className="is-progress" /> In Progress</span>
            <span><i className="is-planned" /> Planned</span>
            <span><i className="is-started" /> Not Started</span>
          </div>

          <div className="cp-question-box">
            <h3>Questions about your area?</h3>
            <p>Contact our team and we&apos;ll be happy to help.</p>
            <a href="mailto:support@fibrehood.co.zw">
              Contact Us
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </aside>

        <div className="cp-live-map">
          <Suspense fallback={<MapSkeleton />}>
            <CoverageMap
              selectedPosition={selectedPosition}
              onMapClick={handleMapClick}
              selectedStatus={result?.status ?? null}
            />
          </Suspense>

          {!selectedPosition && !isChecking && (
            <div className="cp-map-hint">
              <span className="material-symbols-outlined">touch_app</span>
              <span>Click the map to drop a pin, or search above</span>
            </div>
          )}
        </div>
      </div>

      {result && !isChecking && (
        <div className="cp-result-wrap">
          <CoverageResultCard
            result={result}
            onCTAClick={handleCTAClick}
            onReset={handleReset}
          />
        </div>
      )}

      {/* ── Modals ── */}
      <Suspense fallback={null}>
        {activeModal === 'registerInterest' && (
          <RegisterInterestForm onClose={handleCloseModal} {...modalPrefill} />
        )}
        {activeModal === 'getConnected' && (
          <GetConnectedForm onClose={handleCloseModal} {...modalPrefill} />
        )}
      </Suspense>
    </section>
  );
});

export default CoverageSection;
