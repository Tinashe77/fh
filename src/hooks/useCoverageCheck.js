/**
 * useCoverageCheck
 * Custom React hook encapsulating the full coverage check flow.
 *
 * Phase 2 upgrade path:
 *   - Replace `checkCoverage` import with an API call inside this hook
 *   - The hook interface (result, isChecking, error, check, reset) stays the same
 *   - Components that consume this hook need no changes
 */

import { useState, useCallback } from 'react';
import { checkCoverage } from '../utils/coverageUtils';
import { reverseGeocode, formatAddress } from '../utils/geocodeUtils';

/**
 * @typedef {Object} CoverageResult
 * @property {boolean}      matched   - Whether a coverage zone was found
 * @property {object|null}  zone      - The matched zone object from coverageZones.json
 * @property {string}       status    - Coverage status key (LIVE | IN_PROGRESS | PLANNED | INVESTIGATION | NOT_AVAILABLE)
 * @property {string}       address   - Human-readable address string
 * @property {{ lat: number, lng: number }} latlng  - The checked coordinate
 */

export function useCoverageCheck() {
  /** @type {[CoverageResult|null, Function]} */
  const [result, setResult] = useState(null);
  const [isChecking, setIsChecking] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Run the coverage check for a given coordinate.
   *
   * @param {number}       lat             - Latitude
   * @param {number}       lng             - Longitude
   * @param {string|null}  addressOverride - Pre-formatted address (skips reverse geocoding)
   */
  const check = useCallback(async (lat, lng, addressOverride = null) => {
    setIsChecking(true);
    setError(null);

    try {
      // 1. Check point against local polygon data (synchronous)
      const coverageResult = checkCoverage(lat, lng);

      // 2. Resolve the display address
      let address = addressOverride;
      if (!address) {
        const geoResult = await reverseGeocode(lat, lng);
        address = formatAddress(geoResult);
      }

      setResult({
        ...coverageResult,
        address,
        latlng: { lat, lng },
      });
    } catch (err) {
      console.error('[useCoverageCheck] check error:', err);
      setError('Failed to check coverage. Please try again.');
    } finally {
      setIsChecking(false);
    }
  }, []);

  /** Clear result and error state */
  const reset = useCallback(() => {
    setResult(null);
    setError(null);
  }, []);

  return { result, isChecking, error, check, reset };
}
