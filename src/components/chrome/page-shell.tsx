import type { ReactNode } from "react";
import { HALO_SUBPAGE, HaloField } from "./halo-field";
import { Header } from "./header";

type HaloPair = [dark: string, light: string];

export function PageShell({
  children,
  halos = HALO_SUBPAGE,
  minimalHeader = false,
}: {
  children: ReactNode;
  halos?: HaloPair[];
  minimalHeader?: boolean;
}) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      <HaloField halos={halos} />
      <Header minimal={minimalHeader} />
      <main className="relative flex-1" style={{ paddingTop: "var(--header-h, 104px)" }}>
        {children}
      </main>
    </div>
  );
}

export function Container({
  children,
  maxWidth = 1180,
  className = "",
}: {
  children: ReactNode;
  maxWidth?: number;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto ${className}`}
      style={{
        maxWidth,
        padding: "clamp(28px, 4vw, 40px) clamp(20px, 4.5vw, 64px) clamp(56px, 7vw, 96px)",
      }}
    >
      {children}
    </div>
  );
}
