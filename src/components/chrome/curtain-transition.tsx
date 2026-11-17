"use client";

import { useRouter } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type Phase = "idle" | "closing" | "closed" | "opening";

type CurtainContextValue = {
  play: (href: string) => void;
};

const CurtainContext = createContext<CurtainContextValue | null>(null);

const DURATION = 650; // ms — matches the CSS transition-duration below
const REVEAL_DELAY = 150; // ms the new route gets to paint while fully hidden
const REDUCED_MOTION_DURATION = 20;

export function CurtainProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [phase, setPhase] = useState<Phase>("idle");
  const busyRef = useRef(false);

  const play = useCallback(
    (href: string) => {
      if (busyRef.current) return;
      busyRef.current = true;

      const reduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const dur = reduced ? REDUCED_MOTION_DURATION : DURATION;
      const reveal = reduced ? REDUCED_MOTION_DURATION : REVEAL_DELAY;

      setPhase("closing");
      window.setTimeout(() => {
        setPhase("closed");
        router.push(href);
        window.setTimeout(() => {
          setPhase("opening");
          window.setTimeout(() => {
            setPhase("idle");
            busyRef.current = false;
          }, dur);
        }, reveal);
      }, dur);
    },
    [router]
  );

  const panelsClosed = phase === "closing" || phase === "closed";
  const visible = phase !== "idle";

  return (
    <CurtainContext.Provider value={{ play }}>
      {children}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[100]"
        style={{ visibility: visible ? "visible" : "hidden" }}
      >
        <CurtainPanel side="left" closed={panelsClosed} />
        <CurtainPanel side="right" closed={panelsClosed} />
      </div>
    </CurtainContext.Provider>
  );
}

function CurtainPanel({ side, closed }: { side: "left" | "right"; closed: boolean }) {
  const offscreen = side === "left" ? "-101%" : "101%";
  const positionStyle: CSSProperties =
    side === "left" ? { left: 0 } : { right: 0 };
  const trimStyle: CSSProperties =
    side === "left" ? { right: -1 } : { left: -1 };

  return (
    <div
      className="absolute top-0 h-full"
      style={{
        ...positionStyle,
        width: "calc(50% + 3px)",
        transform: closed ? "translateX(0)" : `translateX(${offscreen})`,
        transition: `transform ${DURATION}ms cubic-bezier(.65,0,.35,1)`,
        background:
          "repeating-linear-gradient(100deg, rgba(0,0,0,.35) 0 4px, rgba(255,255,255,.07) 4px 7px, transparent 7px 34px)," +
          "linear-gradient(180deg, var(--curtain-top) 0%, var(--curtain-mid) 55%, var(--curtain-base) 100%)",
        boxShadow:
          side === "left"
            ? "inset -10px 0 24px rgba(0,0,0,.5)"
            : "inset 10px 0 24px rgba(0,0,0,.5)",
      }}
    >
      <div
        className="absolute top-0 h-full w-[6px]"
        style={{
          ...trimStyle,
          background: "linear-gradient(180deg, #F2D98A, #C9A66B 50%, #8A6A3A)",
          boxShadow: "0 0 10px rgba(201,166,107,.6)",
        }}
      />
    </div>
  );
}

export function useCurtain() {
  const ctx = useContext(CurtainContext);
  if (!ctx) {
    throw new Error("useCurtain must be used within a CurtainProvider");
  }
  return ctx;
}
