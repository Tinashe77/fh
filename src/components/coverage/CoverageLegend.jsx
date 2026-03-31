import { STATUS_CONFIG } from '../../utils/statusConfig';

const LEGEND_STATUSES = ['LIVE', 'IN_PROGRESS', 'PLANNED', 'INVESTIGATION', 'NOT_AVAILABLE'];

const CoverageLegend = () => {
  return (
    <div className="absolute bottom-4 right-4 z-[1000] rounded-2xl border border-white/70 bg-white/95 px-4 py-3 shadow-[0_18px_40px_rgba(3,5,104,0.12)] backdrop-blur-sm">
      <p className="text-[9px] font-black uppercase tracking-[0.25em] text-on-surface-variant mb-2.5">
        Coverage
      </p>
      <div className="space-y-1.5">
        {LEGEND_STATUSES.map((status) => {
          const cfg = STATUS_CONFIG[status];
          return (
            <div key={status} className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-sm shrink-0 border border-white/60"
                style={{ backgroundColor: cfg.fillColor, opacity: 0.85 }}
              />
              <span className="text-[10px] font-semibold text-on-surface-variant leading-none">
                {cfg.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CoverageLegend;
