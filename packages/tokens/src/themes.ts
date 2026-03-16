import type { FlatTokenMap, ThemeName } from "./types";

const coreLight: FlatTokenMap = {
  "surface.default": "#ffffff",
  "surface.elevated": "#f8fafc",
  "surface.overlay": "rgba(255, 255, 255, 0.92)",
  "text.primary": "#0f172a",
  "text.secondary": "#334155",
  "text.inverse": "#ffffff",
  "border.default": "#e2e8f0",
  "border.strong": "#cbd5e1",
  "accent.default": "#1d4ed8",
  "accent.hover": "#1e40af",
  "focus.ring": "#0891b2"
};

const coreDark: FlatTokenMap = {
  "surface.default": "#0b1220",
  "surface.elevated": "#111827",
  "surface.overlay": "rgba(15, 23, 42, 0.9)",
  "text.primary": "#f8fafc",
  "text.secondary": "#cbd5e1",
  "text.inverse": "#020617",
  "border.default": "#334155",
  "border.strong": "#475569",
  "accent.default": "#38bdf8",
  "accent.hover": "#0ea5e9",
  "focus.ring": "#22d3ee"
};

const glass: FlatTokenMap = {
  ...coreLight,
  "surface.overlay": "rgba(255, 255, 255, 0.68)",
  "border.default": "rgba(148, 163, 184, 0.35)",
  "shadow.panel": "0 16px 40px rgba(2, 6, 23, 0.16)",
  "backdrop.blur": "16px"
};

const neoBrutal: FlatTokenMap = {
  "surface.default": "#fffde7",
  "surface.elevated": "#ffffff",
  "surface.overlay": "#ffffff",
  "text.primary": "#111827",
  "text.secondary": "#111827",
  "text.inverse": "#ffffff",
  "border.default": "#111827",
  "border.strong": "#111827",
  "accent.default": "#ef4444",
  "accent.hover": "#dc2626",
  "focus.ring": "#111827",
  "shadow.panel": "6px 6px 0 #111827"
};

export const themePacks: Record<ThemeName, FlatTokenMap> = {
  "core-light": coreLight,
  "core-dark": coreDark,
  glass,
  "neo-brutal": neoBrutal
};
