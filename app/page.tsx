"use client";

import { QRCodeCanvas } from "qrcode.react";

export default function Home() {
  const url =
    typeof window !== "undefined"
      ? `${window.location.origin}/download`
      : "http://localhost:3000/download";

  return (
    <main style={{ padding: 24, fontFamily: "sans-serif" }}>
      <h1>Scan to Download</h1>
      <p>Scan this QR code to download 2 PDFs and 1 MP4.</p>

      <div style={{ marginTop: 20, background: "#fff", padding: 16, display: "inline-block" }}>
        <QRCodeCanvas value={url} size={260} includeMargin />
      </div>

      <p style={{ marginTop: 16 }}>
        QR URL: <code>{url}</code>
      </p>
    </main>
  );
}
