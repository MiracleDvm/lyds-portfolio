export function VideoPhoneFrame({
  src,
  poster,
  maxWidth = 280,
  autoPlay = false,
  ariaLabel,
}: {
  src: string;
  poster: string;
  maxWidth?: number;
  autoPlay?: boolean;
  ariaLabel?: string;
}) {
  return (
    <div
      className="mx-auto w-full rounded-[40px] p-2.5"
      style={{
        maxWidth,
        background: "var(--glass-bg)",
        border: "1.5px solid var(--glass-border)",
        boxShadow: "var(--glass-shadow)",
      }}
    >
      <div className="mx-auto mb-2 h-1.5 w-[68px] rounded-full" style={{ background: "rgba(42,22,38,.35)" }} />
      <video
        src={src}
        poster={poster}
        controls
        playsInline
        preload="metadata"
        autoPlay={autoPlay}
        muted={autoPlay}
        loop={autoPlay}
        aria-label={ariaLabel}
        className="w-full rounded-[30px] object-cover"
        style={{ aspectRatio: "9/16", background: "#2A1626" }}
      />
    </div>
  );
}
