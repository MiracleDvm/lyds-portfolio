import { media } from "@/lib/media";

const CV_FILENAME = "CV_Doriane_Atohountoun.pdf";

// Fetches the PDF into a blob first rather than linking straight to
// /media/<hash>.pdf with a `download` attribute: some static-file hosts
// (CDNs included) send their own Content-Disposition filename, which a
// few browsers prefer over the anchor's `download` suggestion. A blob URL
// has no server-provided filename to compete with, so the suggested name
// always wins.
export async function downloadCv() {
  try {
    const res = await fetch(media.cv);
    if (!res.ok) throw new Error("fetch failed");
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = CV_FILENAME;
    a.rel = "noopener";
    a.click();
    URL.revokeObjectURL(url);
  } catch {
    window.open(media.cv, "_blank", "noopener");
  }
}
