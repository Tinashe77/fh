/**
 * STATUS_CONFIG
 * Single source of truth for all coverage status definitions.
 *
 * Phase 2 note: This file can be replaced by a config fetch from the API
 * so status labels, colors, and messages can be managed by an admin dashboard.
 */

export const STATUS_CONFIG = {
  LIVE: {
    label: 'Live',
    message: 'Fibre is available in your area.',
    ctaText: 'Get Connected',
    ctaForm: 'getConnected',
    // Leaflet polygon styling
    color: '#030568',
    fillColor: '#fdcc00',
    fillOpacity: 0.28,
    weight: 3,
    // Tailwind classes
    textClass: 'text-blue-950',
    bgClass: 'bg-yellow-50',
    borderClass: 'border-primary-container',
    badgeBg: 'bg-secondary-container/20',
    badgeText: 'text-primary-container',
    dotColor: 'bg-secondary-container',
    iconName: 'wifi',
  },
  IN_PROGRESS: {
    label: 'In Progress',
    message: 'Fibre rollout is currently in progress in your area.',
    ctaText: 'Register Interest',
    ctaForm: 'registerInterest',
    color: '#c98a00',
    fillColor: '#fdcc00',
    fillOpacity: 0.2,
    weight: 2,
    textClass: 'text-amber-800',
    bgClass: 'bg-yellow-50',
    borderClass: 'border-amber-500',
    badgeBg: 'bg-yellow-100',
    badgeText: 'text-amber-800',
    dotColor: 'bg-yellow-500',
    iconName: 'construction',
  },
  PLANNED: {
    label: 'Planned',
    message: 'Your area is included in future rollout plans.',
    ctaText: 'Register Interest',
    ctaForm: 'registerInterest',
    color: '#4b57c5',
    fillColor: '#bfc2ff',
    fillOpacity: 0.22,
    weight: 2,
    textClass: 'text-indigo-700',
    bgClass: 'bg-indigo-50',
    borderClass: 'border-indigo-400',
    badgeBg: 'bg-indigo-100',
    badgeText: 'text-indigo-700',
    dotColor: 'bg-indigo-400',
    iconName: 'schedule',
  },
  INVESTIGATION: {
    label: 'Under Investigation',
    message: 'We are assessing demand in your area.',
    ctaText: 'Show My Interest',
    ctaForm: 'registerInterest',
    color: '#735c00',
    fillColor: '#ffe086',
    fillOpacity: 0.18,
    weight: 2,
    textClass: 'text-yellow-800',
    bgClass: 'bg-yellow-50',
    borderClass: 'border-yellow-500',
    badgeBg: 'bg-yellow-100',
    badgeText: 'text-yellow-800',
    dotColor: 'bg-yellow-500',
    iconName: 'search',
  },
  NOT_AVAILABLE: {
    label: 'Not Available',
    message: 'Fibre is not yet available in your area.',
    ctaText: 'Show My Interest',
    ctaForm: 'registerInterest',
    color: '#94a3b8',
    fillColor: '#cbd5e1',
    fillOpacity: 0.15,
    weight: 2,
    textClass: 'text-slate-600',
    bgClass: 'bg-slate-50',
    borderClass: 'border-slate-400',
    badgeBg: 'bg-slate-100',
    badgeText: 'text-slate-600',
    dotColor: 'bg-slate-400',
    iconName: 'signal_wifi_off',
  },
};

/** Priority order for resolving overlapping zones */
export const STATUS_PRIORITY = {
  LIVE: 5,
  IN_PROGRESS: 4,
  PLANNED: 3,
  INVESTIGATION: 2,
  NOT_AVAILABLE: 1,
};

export const ALL_STATUSES = Object.keys(STATUS_CONFIG);
