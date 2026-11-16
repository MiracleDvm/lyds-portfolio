import type { CSSProperties } from "react";

// Returns the `animation` shorthand with a baked-in delay. We always set the
// full shorthand (never mix it with a separate `animationDelay` longhand) —
// React warns when a shorthand and its longhand are both set across renders.
export function floatAnimation(delaySeconds: number, big = false): CSSProperties {
  return {
    animation: big
      ? `lydsFloatBig 6s ease-in-out ${delaySeconds}s infinite`
      : `lydsFloat 4.5s ease-in-out ${delaySeconds}s infinite`,
  };
}
