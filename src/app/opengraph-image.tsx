import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0a0a",
          color: "#e5e5e5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#22d3ee" }}>
          {site.location}
        </div>
        <div style={{ display: "flex", fontSize: 72, fontWeight: 600, marginTop: 24 }}>
          {site.name}
        </div>
        <div style={{ display: "flex", fontSize: 36, color: "#a3a3a3", marginTop: 12 }}>
          {site.role}
        </div>
      </div>
    ),
    { ...size },
  );
}
