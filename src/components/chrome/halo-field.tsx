"use client";

import { useSite } from "@/context/site-provider";

type HaloPair = [dark: string, light: string];

const POSITIONS = [
  { left: "23%", top: "120px", width: "54%", height: "700px", blur: 110 },
  { left: "60%", top: "430px", width: "36%", height: "480px", blur: 100 },
  { left: "-8%", top: "-140px", width: "39%", height: "460px", blur: 110 },
  { left: "3%", top: "560px", width: "29%", height: "380px", blur: 110 },
  { left: "75%", top: "-120px", width: "31%", height: "380px", blur: 110 },
];

export const HALO_HOME: HaloPair[] = [
  ["rgba(142,91,181,.55)", "rgba(190,160,230,.85)"],
  ["rgba(122,31,61,.7)", "rgba(242,170,195,.9)"],
  ["rgba(224,127,156,.30)", "rgba(142,91,181,.30)"],
  ["rgba(201,166,107,.22)", "rgba(224,127,156,.38)"],
  ["rgba(142,91,181,.35)", "rgba(201,166,107,.32)"],
];

export const HALO_SUBPAGE: HaloPair[] = [
  ["rgba(142,91,181,.30)", "rgba(233,221,243,.75)"],
  ["rgba(122,31,61,.7)", "rgba(242,170,195,.9)"],
  ["rgba(224,127,156,.22)", "rgba(242,198,212,.55)"],
  ["rgba(201,166,107,.22)", "rgba(224,127,156,.38)"],
  ["rgba(122,31,61,.35)", "rgba(201,166,107,.30)"],
];

export function HaloField({ halos = HALO_SUBPAGE }: { halos?: HaloPair[] }) {
  const { dark } = useSite();

  return (
    <>
      {POSITIONS.map((pos, i) => (
        <div
          key={i}
          aria-hidden
          className="absolute rounded-full transition-[background] duration-500"
          style={{
            left: pos.left,
            top: pos.top,
            width: pos.width,
            height: pos.height,
            background: halos[i][dark ? 0 : 1],
            filter: `blur(${pos.blur}px)`,
          }}
        />
      ))}
    </>
  );
}
