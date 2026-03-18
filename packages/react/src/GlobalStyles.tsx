import * as React from "react";

export function GlobalStyles() {
  return (
    <style>
      {`@keyframes aurora-skeleton {
        0% { background-position: 100% 0; }
        100% { background-position: -100% 0; }
      }
      @keyframes aurora-spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      * { box-sizing: border-box; }
      body { margin: 0; }
      input[data-aurora-input="true"]::placeholder {
        color: var(--aurora-input-placeholder);
      }
      `}
    </style>
  );
}
