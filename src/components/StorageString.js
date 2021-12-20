import React from "react";

export default function StorageString({ storage }) {
  const { total, used, unit } = storage;

  return (
    <p className="storage-string">
      You've used{" "}
      <strong>
        {used} {unit}
      </strong>{" "}
      of your storage
    </p>
  );
}
