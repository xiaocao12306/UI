import { vi } from "vitest";

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

export type MatchMediaMockOptions = {
  initialMatches?: boolean;
  legacyOnly?: boolean;
};

export type MatchMediaMockControl = {
  setMatches: (next: boolean) => void;
  restore: () => void;
};

export function installMatchMediaMock({
  initialMatches = false,
  legacyOnly = false
}: MatchMediaMockOptions = {}): MatchMediaMockControl {
  const original = window.matchMedia;
  let currentMatches = initialMatches;

  const listeners = new Set<(event: MediaQueryListEvent) => void>();
  const legacyListeners = new Set<(event: MediaQueryListEvent) => void>();

  const notifyListeners = () => {
    const event = { matches: currentMatches, media: reducedMotionQuery } as MediaQueryListEvent;
    listeners.forEach((listener) => listener(event));
    legacyListeners.forEach((listener) => listener(event));
    if (typeof mediaQueryList.onchange === "function") {
      mediaQueryList.onchange(event);
    }
  };

  const mediaQueryList = {
    media: reducedMotionQuery,
    get matches() {
      return currentMatches;
    },
    onchange: null as ((this: MediaQueryList, ev: MediaQueryListEvent) => unknown) | null,
    addEventListener: legacyOnly
      ? undefined
      : ((type: string, callback: EventListenerOrEventListenerObject | null) => {
          if (type !== "change" || callback === null) {
            return;
          }
          const listener =
            typeof callback === "function" ? callback : callback.handleEvent.bind(callback);
          listeners.add(listener as (event: MediaQueryListEvent) => void);
        }),
    removeEventListener: legacyOnly
      ? undefined
      : ((type: string, callback: EventListenerOrEventListenerObject | null) => {
          if (type !== "change" || callback === null) {
            return;
          }
          const listener =
            typeof callback === "function" ? callback : callback.handleEvent.bind(callback);
          listeners.delete(listener as (event: MediaQueryListEvent) => void);
        }),
    addListener: (listener: ((this: MediaQueryList, ev: MediaQueryListEvent) => unknown) | null) => {
      if (listener) {
        legacyListeners.add(listener as (event: MediaQueryListEvent) => void);
      }
    },
    removeListener: (listener: ((this: MediaQueryList, ev: MediaQueryListEvent) => unknown) | null) => {
      if (listener) {
        legacyListeners.delete(listener as (event: MediaQueryListEvent) => void);
      }
    },
    dispatchEvent: (event: Event) => {
      if (event.type === "change") {
        notifyListeners();
      }
      return true;
    }
  } as MediaQueryList;

  Object.defineProperty(window, "matchMedia", {
    configurable: true,
    writable: true,
    value: vi.fn().mockImplementation(() => mediaQueryList)
  });

  return {
    setMatches(next: boolean) {
      if (currentMatches === next) {
        return;
      }
      currentMatches = next;
      notifyListeners();
    },
    restore() {
      Object.defineProperty(window, "matchMedia", {
        configurable: true,
        writable: true,
        value: original
      });
    }
  };
}
