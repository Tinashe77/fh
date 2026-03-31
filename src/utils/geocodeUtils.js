/**
 * geocodeUtils.js
 * Nominatim geocoding helpers for Phase 1 (no backend proxy).
 *
 * Phase 2 upgrade path:
 *   - Route requests through your own backend to avoid Nominatim rate limits
 *   - Replace NOMINATIM_BASE with your server endpoint (e.g. '/api/geocode')
 *   - Function signatures stay the same — call sites need no changes.
 *
 * Nominatim usage policy: 1 request/second, do not bulk geocode.
 * The debounce in CoverageSearchBar enforces this automatically.
 */

const NOMINATIM_BASE = 'https://nominatim.openstreetmap.org';

// Restrict geocoding to Zimbabwe by default
const DEFAULT_COUNTRY_CODE = 'zw';
const DEFAULT_COUNTRY_NAME = 'Zimbabwe';

const NOMINATIM_HEADERS = {
  'Accept-Language': 'en',
  // Nominatim requires a valid User-Agent
  'User-Agent': 'FibreHoodApp/1.0 (contact@fibrehood.co.zw)',
};

/**
 * Search for places matching a free-text query.
 * Returns an array of Nominatim result objects.
 *
 * @param {string} query
 * @param {number} limit  - Max results (default 5)
 * @returns {Promise<Array>}
 */
export async function searchPlaces(query, limit = 5) {
  if (!query || query.trim().length < 2) return [];

  const params = new URLSearchParams({
    q: `${query.trim()}, ${DEFAULT_COUNTRY_NAME}`,
    format: 'json',
    addressdetails: '1',
    limit: String(limit),
    countrycodes: DEFAULT_COUNTRY_CODE,
  });

  try {
    const res = await fetch(`${NOMINATIM_BASE}/search?${params}`, {
      headers: NOMINATIM_HEADERS,
    });
    if (!res.ok) throw new Error(`Nominatim search failed: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error('[geocodeUtils] searchPlaces error:', err);
    return [];
  }
}

/**
 * Reverse geocode latitude/longitude into an address.
 * Returns a Nominatim result object or null on failure.
 *
 * @param {number} lat
 * @param {number} lng
 * @returns {Promise<object|null>}
 */
export async function reverseGeocode(lat, lng) {
  const params = new URLSearchParams({
    lat: String(lat),
    lon: String(lng),
    format: 'json',
    addressdetails: '1',
    zoom: '16',
  });

  try {
    const res = await fetch(`${NOMINATIM_BASE}/reverse?${params}`, {
      headers: NOMINATIM_HEADERS,
    });
    if (!res.ok) throw new Error(`Nominatim reverse geocode failed: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error('[geocodeUtils] reverseGeocode error:', err);
    return null;
  }
}

/**
 * Format a Nominatim result object into a clean display string.
 *
 * @param {object|null} result  - Nominatim result object
 * @returns {string}
 */
export function formatAddress(result) {
  if (!result) return 'Unknown location';

  const { address, display_name } = result;
  if (!address) return display_name || 'Unknown location';

  const parts = [
    address.road || address.pedestrian || address.path,
    address.suburb || address.neighbourhood || address.quarter,
    address.city || address.town || address.village,
  ].filter(Boolean);

  return parts.length > 0 ? parts.join(', ') : display_name || 'Unknown location';
}

/**
 * Extract a short display label from a Nominatim result (for suggestion list).
 *
 * @param {object} result  - Nominatim result object
 * @returns {string}
 */
export function formatSuggestionLabel(result) {
  if (!result) return '';

  const { address } = result;
  if (!address) return result.display_name || '';

  const parts = [
    address.road || address.pedestrian || address.suburb || address.neighbourhood,
    address.city || address.town || address.village,
  ].filter(Boolean);

  return parts.length > 0 ? parts.join(', ') : result.display_name;
}
