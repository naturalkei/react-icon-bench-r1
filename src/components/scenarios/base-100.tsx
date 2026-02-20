'use client';

export function BaseScenario100() {
  return (
    <div className="icon-grid">
      {Array.from({ length: 100 }, (_, i) => (
        <div key={i} className="icon-cell">
          <span className="placeholder">item-{i + 1}</span>
        </div>
      ))}
    </div>
  );
}
