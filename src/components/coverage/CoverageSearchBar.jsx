/**
 * CoverageSearchBar
 * Geocoding search bar with:
 *  - Nominatim autocomplete suggestions (debounced 500ms)
 *  - "Use my location" geolocation button
 *  - Keyboard navigation (↑ ↓ Enter Escape)
 *  - Loading and error states
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import { searchPlaces, formatSuggestionLabel, formatAddress } from '../../utils/geocodeUtils';

const CoverageSearchBar = ({ onLocationSelect, isChecking, externalSearch }) => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isLocating, setIsLocating] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [geoError, setGeoError] = useState('');

  const inputRef = useRef(null);
  const containerRef = useRef(null);
  const debounceRef = useRef(null);

  // ── Debounced search ──────────────────────────────────────────────────────
  useEffect(() => {
    clearTimeout(debounceRef.current);

    if (inputValue.trim().length < 2) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    setIsSearching(true);
    debounceRef.current = setTimeout(async () => {
      const results = await searchPlaces(inputValue);
      setSuggestions(results);
      setShowSuggestions(results.length > 0);
      setHighlightedIndex(-1);
      setIsSearching(false);
    }, 500);

    return () => clearTimeout(debounceRef.current);
  }, [inputValue]);

  // ── Close suggestions on outside click ───────────────────────────────────
  useEffect(() => {
    const handler = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // ── Select a suggestion ───────────────────────────────────────────────────
  const handleSelect = useCallback(
    (result) => {
      const lat = parseFloat(result.lat);
      const lng = parseFloat(result.lon);
      const address = formatAddress(result);
      setInputValue(formatSuggestionLabel(result));
      setSuggestions([]);
      setShowSuggestions(false);
      onLocationSelect(lat, lng, address);
    },
    [onLocationSelect]
  );

  // ── Keyboard navigation ───────────────────────────────────────────────────
  const handleKeyDown = (e) => {
    if (!showSuggestions) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex((i) => Math.min(i + 1, suggestions.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (highlightedIndex >= 0 && suggestions[highlightedIndex]) {
        handleSelect(suggestions[highlightedIndex]);
      }
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  // ── External search triggered from hero input ─────────────────────────────
  useEffect(() => {
    if (!externalSearch?.query || !externalSearch?.ts) return;

    const run = async () => {
      setInputValue(externalSearch.query);
      setSuggestions([]);
      setShowSuggestions(false);
      setIsSearching(true);

      const results = await searchPlaces(externalSearch.query);
      setIsSearching(false);

      if (results.length > 0) {
        // Auto-select the top result — same path as a manual suggestion pick
        handleSelect(results[0]);
      }
    };

    run();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [externalSearch?.ts]);

  // ── "Use my location" ─────────────────────────────────────────────────────
  const handleUseLocation = () => {
    if (!navigator.geolocation) {
      setGeoError('Geolocation is not supported by your browser.');
      return;
    }
    setIsLocating(true);
    setGeoError('');
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setInputValue('My location');
        setIsLocating(false);
        onLocationSelect(latitude, longitude, null);
      },
      () => {
        setGeoError('Location access denied. Please enter an address manually.');
        setIsLocating(false);
      },
      { timeout: 8000 }
    );
  };

  const isBusy = isSearching || isLocating || isChecking;

  return (
    <div ref={containerRef} className="relative w-full">
      {/* ── Input row ── */}
      <div className="flex flex-col gap-2.5 rounded-[1.5rem] bg-surface-container-low p-2.5 sm:flex-row">
        {/* Text input */}
        <div className="flex flex-1 items-center gap-3 rounded-[1.1rem] border border-primary-container/6 bg-white px-4 py-3.5 shadow-[0_10px_28px_rgba(3,5,104,0.04)]">
          {isBusy ? (
            <svg
              className="w-5 h-5 text-primary-container animate-spin shrink-0"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
          ) : (
            <span className="material-symbols-outlined text-primary-container shrink-0">
              location_on
            </span>
          )}
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
            placeholder="Enter your suburb, estate, or street address"
            className="w-full bg-transparent border-none focus:ring-0 text-base font-medium text-on-surface placeholder:text-outline/55 p-0"
            autoComplete="off"
          />
          {inputValue && (
            <button
              onClick={() => {
                setInputValue('');
                setSuggestions([]);
                setShowSuggestions(false);
                inputRef.current?.focus();
              }}
              className="shrink-0 text-outline/60 hover:text-on-surface transition-colors"
              aria-label="Clear search"
            >
              <span className="material-symbols-outlined text-base">close</span>
            </button>
          )}
        </div>

        {/* Use my location */}
        <button
          onClick={handleUseLocation}
          disabled={isLocating}
          title="Use my location"
          className="shrink-0 flex items-center justify-center gap-2 rounded-[1.1rem] border border-primary-container/15 bg-white px-4 py-3.5 text-sm font-bold text-primary-container shadow-[0_10px_28px_rgba(3,5,104,0.04)] transition-colors hover:bg-primary-container/5 disabled:opacity-50"
        >
          <span className="material-symbols-outlined text-base">
            {isLocating ? 'sync' : 'my_location'}
          </span>
          <span className="hidden sm:inline">My Location</span>
        </button>

        {/* Search button */}
        <button
          onClick={() => {
            if (suggestions.length > 0) handleSelect(suggestions[0]);
          }}
          disabled={isBusy || inputValue.trim().length < 2}
          className="shrink-0 rounded-full bg-primary-container px-8 py-3.5 text-sm font-extrabold uppercase tracking-[0.2em] text-white shadow-[0_16px_38px_rgba(3,5,104,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_46px_rgba(3,5,104,0.24)] disabled:translate-y-0 disabled:opacity-50"
        >
          Check Coverage
        </button>
      </div>

      {/* ── Geolocation error ── */}
      {geoError && (
        <p className="mt-2 px-4 text-sm text-red-600 font-medium">{geoError}</p>
      )}

      {/* ── Autocomplete suggestions ── */}
      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute left-0 right-0 top-full z-[2000] mt-2 overflow-hidden rounded-2xl border border-primary-container/8 bg-white shadow-[0_26px_70px_rgba(3,5,104,0.12)]">
          {suggestions.map((result, index) => (
            <li key={result.place_id}>
              <button
                onMouseDown={(e) => {
                  e.preventDefault();
                  handleSelect(result);
                }}
                className={`w-full flex items-start gap-3 px-5 py-3.5 text-left transition-colors ${
                  index === highlightedIndex
                    ? 'bg-primary-container/5'
                    : 'hover:bg-surface-container-low'
                }`}
              >
                <span className="material-symbols-outlined text-primary-container/60 shrink-0 mt-0.5 text-base">
                  location_on
                </span>
                <div>
                  <p className="text-sm font-semibold text-on-surface leading-snug">
                    {formatSuggestionLabel(result)}
                  </p>
                  <p className="text-xs text-on-surface-variant mt-0.5 leading-snug line-clamp-1">
                    {result.display_name}
                  </p>
                </div>
              </button>
              {index < suggestions.length - 1 && (
                <div className="mx-5 border-b border-primary-container/5" />
              )}
            </li>
          ))}
        </ul>
      )}

      {/* ── No results state ── */}
      {showSuggestions && suggestions.length === 0 && !isSearching && inputValue.length >= 2 && (
        <div className="absolute left-0 right-0 top-full z-[2000] mt-2 rounded-2xl border border-primary-container/8 bg-white px-5 py-4 shadow-[0_20px_55px_rgba(3,5,104,0.1)]">
          <p className="text-sm text-on-surface-variant font-medium">
            No results found for &ldquo;{inputValue}&rdquo;. Try a nearby suburb or area name.
          </p>
        </div>
      )}
    </div>
  );
};

export default CoverageSearchBar;
