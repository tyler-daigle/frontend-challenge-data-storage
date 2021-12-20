import React from "react";

export default function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="toolbar-button" type="button">
      {children}
    </button>
  );
}
