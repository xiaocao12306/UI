import * as React from "react";

export function GlobalStyles() {
  return (
    <style>
      {`@keyframes aurora-skeleton {
        0% { background-position: 100% 0; }
        100% { background-position: -100% 0; }
      }
      * { box-sizing: border-box; }
      body { margin: 0; }
      `}
    </style>
  );
}
