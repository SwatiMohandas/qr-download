"use client";

import { useEffect, useMemo, useState } from "react";

type FileItem = {
  name: string;
  path: string;
};

export default function DownloadPage() {
  const files: FileItem[] = useMemo(
    () => [
      {
        name: "THAI BROCHURE (PDF)",
        path: "https://drive.google.com/uc?export=download&id=1Zo-eqq9EGc53LLjQGQ7q1AnzjFMYZGLk",
      },
      {
        name: "TT Vector Malabar Mango Catalogue (PDF)",
        path: "https://drive.google.com/uc?export=download&id=18rU86gXtk1rD7zR1728K-k4-t9Xh9AY9",
      },
      {
        name: "Team Thai Final (MP4)",
        path: "https://drive.google.com/uc?export=download&id=1K8G43LWFJ7LxbaJ9Ggutn0H3mJlXNPbm",
      },
    ],
    [],
  );

  const [autoTried, setAutoTried] = useState(false);

  useEffect(() => {
    const tryAutoDownload = async () => {
      for (const f of files) {
        const a = document.createElement("a");
        a.href = f.path;
        a.download = decodeURIComponent(f.path.split("/").pop() || "download");
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        await new Promise((r) => setTimeout(r, 800));
      }
      setAutoTried(true);
    };

    tryAutoDownload();
  }, [files]);

  return (
    <main style={{ padding: 24, fontFamily: "sans-serif" }}>
      <h1>Download Files</h1>
      <p>
        If downloads didn’t start automatically, tap the buttons below (some
        browsers block auto-downloads).
      </p>

      <div
        style={{ marginTop: 16, display: "flex", gap: 12, flexWrap: "wrap" }}
      >
        {files.map((f) => (
          <a
            key={f.path}
            href={f.path}
            download
            style={{
              padding: "10px 14px",
              border: "1px solid #ccc",
              borderRadius: 8,
              textDecoration: "none",
              color: "#111",
            }}
          >
            Download {f.name}
          </a>
        ))}
      </div>

      {autoTried && (
        <p style={{ marginTop: 16, color: "#555" }}>
          Auto-download attempted. If you didn’t get all files, use the buttons.
        </p>
      )}
    </main>
  );
}
