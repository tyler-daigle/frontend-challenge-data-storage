import React from "react";

export default function StorageBar({ storage }) {
  const { total, used, unit } = storage;
  return (
    <div>
      <div className="progress-container">
        <progress max={total} value={used} />
      </div>
      <div className="progress-values">
        <span className="left-progress-value">0 {unit}</span>
        <span className="right-progress-value">
          {total} {unit}
        </span>
      </div>
    </div>
  );
}
