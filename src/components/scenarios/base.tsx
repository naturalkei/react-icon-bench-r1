'use client';

export function BaseScenario() {
  return (
    <div className="icon-grid">
      {Array.from({ length: 50 }, (_, i) => (
        <div key={i} className="icon-cell">
          <span className="placeholder">item-{i + 1}</span>
        </div>
      ))}
    </div>
  );
}
