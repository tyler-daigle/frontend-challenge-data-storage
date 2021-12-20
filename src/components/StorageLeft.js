import React from "react";

export default function StorageLeft({ storage }) {
  const { total, used, unit } = storage;
  const left = total - used;
  return (
    <div className="storage-left-container">
      <span className="storage-left-amount">{left}</span>
      <span className="storage-left-unit">{unit} LEFT</span>
    </div>
  );
}
