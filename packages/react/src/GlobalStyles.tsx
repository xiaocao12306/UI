import * as React from "react";

export function GlobalStyles() {
  return (
    <style>
      {`@keyframes aurora-spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes aurora-skeleton-shimmer {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }
      @keyframes aurora-progress-indeterminate {
        0% { transform: translateX(-110%); }
        100% { transform: translateX(330%); }
      }
      * { box-sizing: border-box; }
      body { margin: 0; }
      input[data-aurora-input="true"]::placeholder {
        color: var(--aurora-input-placeholder);
      }
      @media (prefers-reduced-motion: reduce) {
        [data-aurora-reduced-motion~="animate"] {
          animation: none !important;
        }
        [data-aurora-reduced-motion~="transition"] {
          transition-duration: 0ms !important;
          transition-delay: 0ms !important;
        }
        [data-aurora-reduced-motion~="transform-reset"] {
          transform: none !important;
        }
      }
      `}
    </style>
  );
}
