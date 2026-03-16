export const colorTokens = {
  neutral: {
    0: "#ffffff",
    50: "#f8fafc",
    100: "#f1f5f9",
    900: "#0f172a"
  },
  accent: {
    500: "#1d4ed8",
    600: "#1e40af"
  }
} as const;

export const motionTokens = {
  duration: {
    fast: 120,
    normal: 180,
    slow: 260
  },
  easing: {
    standard: "cubic-bezier(0.2, 0, 0, 1)",
    emphasized: "cubic-bezier(0.2, 0.8, 0.2, 1)"
  }
} as const;
