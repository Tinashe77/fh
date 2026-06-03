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
    <section ref={ref} className="px-8 py-24">
      <div className="mx-auto max-w-7xl">

        {/* ── Section header ── */}
        <div className="mb-10">
          <span className="mb-5 inline-flex rounded-full bg-primary-container px-4 py-2 text-xs font-black uppercase tracking-[0.3em] text-white shadow-[0_16px_38px_rgba(3,5,104,0.18)]">
            Coverage
          </span>
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="max-w-2xl font-headline text-3xl font-extrabold leading-tight tracking-tight text-primary lg:text-4xl">
              Search your location and see exactly where Fibrehood reaches in your area.
            </h2>
            <p className="max-w-sm shrink-0 text-sm leading-7 text-on-surface-variant md:text-base">
              Drop a pin on the map or type your address to instantly check fibre availability.
            </p>
          </div>
        </div>

        {/* ── Main card ── */}
        <div
          className="overflow-hidden rounded-[2.25rem] p-[1px]"
          style={{
            background:
              'linear-gradient(145deg, rgba(3,5,104,0.18), rgba(3,5,104,0.06), rgba(253,204,0,0.28))',
            boxShadow: '0 30px 90px rgba(3,5,104,0.1)',
          }}
        >
          <div className="overflow-hidden rounded-[calc(2.25rem-1px)] bg-[linear-gradient(180deg,#ffffff_0%,#fbfbfe_100%)]">
            <div className="border-b border-primary-container/6 bg-[linear-gradient(180deg,#ffffff_0%,#f8f9fd_100%)] p-5">
              <CoverageSearchBar
                onLocationSelect={handleLocationSelect}
                isChecking={isChecking}
                externalSearch={externalSearch}
              />
            </div>

            {/* ── Error state ── */}
            {error && (
              <div className="mx-5 mt-4 flex items-center gap-3 rounded-[1.25rem] border border-red-200 bg-red-50 px-5 py-4 text-red-700">
                <span className="material-symbols-outlined shrink-0">error</span>
                <p className="text-sm font-medium">{error}</p>
              </div>
            )}

            {locationPromptError && (
              <div className="mx-5 mt-4 flex items-center gap-3 rounded-[1.25rem] border border-amber-200 bg-amber-50 px-5 py-4 text-amber-800">
                <span className="material-symbols-outlined shrink-0">my_location</span>
                <p className="text-sm font-medium">{locationPromptError}</p>
              </div>
            )}

            {/* ── Checking overlay hint ── */}
            {isChecking && (
              <div className="mx-5 mt-4 flex items-center gap-3 rounded-[1.25rem] border border-primary-container/10 bg-primary-container/5 px-5 py-3.5 text-primary-container">
                <svg className="h-4 w-4 animate-spin shrink-0" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                </svg>
                <p className="text-sm font-semibold">Checking coverage for this location…</p>
              </div>
            )}

            {/* ── Map ── */}
            <div className="relative p-5 pt-4">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-[1.25rem] border border-primary-container/6 bg-surface-container-low/50 px-4 py-3">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.28em] text-primary-container/55">
                    Coverage Map
                  </p>
                  <p className="mt-1 text-sm font-medium text-on-surface-variant">
                    Live view of active zones, planned rollouts, and map-selected address results.
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-[0_10px_28px_rgba(3,5,104,0.06)]">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                  </span>
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-primary-container">
                    Interactive Map
                  </span>
                </div>
              </div>

              <div className="relative h-[480px] overflow-hidden rounded-[1.75rem] border border-primary-container/8 shadow-[0_24px_65px_rgba(3,5,104,0.1)] md:h-[540px]">
                <Suspense fallback={<MapSkeleton />}>
                  <CoverageMap
                    selectedPosition={selectedPosition}
                    onMapClick={handleMapClick}
                    selectedStatus={result?.status ?? null}
                  />
                </Suspense>

                {!selectedPosition && !isChecking && (
                  <div className="pointer-events-none absolute inset-0 flex items-end justify-center pb-8">
                    <div className="glass-effect flex items-center gap-2.5 rounded-full border border-white/50 px-6 py-3 text-primary-container shadow-glass">
                      <span className="material-symbols-outlined animate-bounce text-base">touch_app</span>
                      <span className="text-sm font-bold">Click the map to drop a pin, or search above</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* ── Result card ── */}
            {result && !isChecking && (
              <div className="border-t border-primary-container/6 bg-[linear-gradient(180deg,#fdfdff_0%,#f8f9fd_100%)] p-5">
                <CoverageResultCard
                  result={result}
                  onCTAClick={handleCTAClick}
                  onReset={handleReset}
                />
              </div>
            )}
          </div>
        </div>
      </div>

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
