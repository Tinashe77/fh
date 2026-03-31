/**
 * CoverageResultCard
 * Slides in below the map after a coverage check.
 * Shows status, address, zone name, message, and CTA.
 */

import { STATUS_CONFIG } from '../../utils/statusConfig';

const STATUS_ICONS = {
  LIVE: 'wifi',
  IN_PROGRESS: 'construction',
  PLANNED: 'schedule',
  INVESTIGATION: 'search',
  NOT_AVAILABLE: 'signal_wifi_off',
};

const CoverageResultCard = ({ result, onCTAClick, onReset }) => {
  if (!result) return null;

  const { status, address, zone, matched } = result;
  const cfg = STATUS_CONFIG[status] || STATUS_CONFIG.NOT_AVAILABLE;
  const icon = STATUS_ICONS[status] || 'info';

  return (
    <div
      className={`
        relative overflow-hidden rounded-[1.75rem] border-l-4 bg-white
        p-6 shadow-[0_22px_60px_rgba(3,5,104,0.08)] md:p-8
        animate-[fadeSlideUp_0.35s_ease_both]
        ${cfg.borderClass}
      `}
    >
      {/* Background tint */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{ background: cfg.fillColor }}
      />

      <div className="relative flex flex-col md:flex-row md:items-center gap-6">
        {/* Icon */}
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-glass"
          style={{ background: `${cfg.fillColor}22`, border: `1.5px solid ${cfg.color}33` }}
        >
          <span
            className="material-symbols-outlined text-2xl"
            style={{ color: cfg.color }}
          >
            {icon}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span
              className={`inline-flex px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] ${cfg.badgeBg} ${cfg.badgeText}`}
            >
              {cfg.label}
            </span>
            {matched && zone && (
              <span className="text-xs text-on-surface-variant font-medium truncate">
                {zone.name}
              </span>
            )}
          </div>

          <p className="font-headline text-lg font-extrabold text-primary leading-snug mb-1">
            {cfg.message}
          </p>

          {address && (
            <p className="text-sm text-on-surface-variant flex items-center gap-1.5 truncate">
              <span className="material-symbols-outlined text-sm shrink-0">location_on</span>
              {address}
            </p>
          )}

          {matched && zone?.description && (
            <p className="text-sm text-on-surface-variant mt-2 leading-relaxed">
              {zone.description}
            </p>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <button
            onClick={() => onCTAClick(cfg.ctaForm, result)}
            className="rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-[0_16px_38px_rgba(3,5,104,0.12)] transition-all hover:scale-105 active:scale-95"
            style={{ background: cfg.color }}
          >
            {cfg.ctaText}
          </button>
          <button
            onClick={onReset}
            className="px-5 py-3.5 font-semibold text-sm rounded-full border border-primary-container/15 bg-surface text-on-surface-variant hover:bg-surface-container transition-colors"
          >
            Search again
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoverageResultCard;
