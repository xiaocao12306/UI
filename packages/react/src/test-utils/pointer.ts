export function dispatchNonPrimaryPointerDown(target: EventTarget) {
  const event = new Event("pointerdown", { bubbles: true, cancelable: true });
  Object.defineProperty(event, "button", { configurable: true, value: 2 });
  Object.defineProperty(event, "buttons", { configurable: true, value: 2 });
  Object.defineProperty(event, "pointerType", { configurable: true, value: "mouse" });
  target.dispatchEvent(event);
}
