import React from "react";

export default function Button({ children }) {
  return (
    <button className="toolbar-button" type="button">
      {children}
    </button>
  );
}
