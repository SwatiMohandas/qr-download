"use client";

type FileItem = { name: string; url: string };

export default function DownloadPage() {
  const files: FileItem[] = [
    {
      name: "Download THAI BROCHURE (PDF)",
      url: "https://drive.google.com/uc?export=download&id=1Zo-eqq9EGc53LLjQGQ7q1AnzjFMYZGLk",
    },
    {
      name: "Download TT Vector Catalogue (PDF)",
      url: "https://drive.google.com/uc?export=download&id=18rU86gXtk1rD7zR1728K-k4-t9Xh9AY9",
    },
    {
      name: "Download Team Thai Final (MP4)",
      url: "https://drive.google.com/uc?export=download&id=1K8G43LWFJ7LxbaJ9Ggutn0H3mJlXNPbm",
    },
  ];

  return (
    <main style={{ padding: 24, fontFamily: "sans-serif" }}>
      <h1>Download Files</h1>
      <p>Tap each button to download.</p>

      <div style={{ marginTop: 16, display: "grid", gap: 12, maxWidth: 520 }}>
        {files.map((f) => (
          <a
            key={f.url}
            href={f.url}
            target="_blank"
            rel="noreferrer"
            style={{
              padding: "12px 14px",
              border: "1px solid #ccc",
              borderRadius: 10,
              textDecoration: "none",
              color: "#111",
            }}
          >
            {f.name}
          </a>
        ))}
      </div>

      <p style={{ marginTop: 16, color: "#555" }}>
        Note: Some phones will open a preview first. If that happens, use the
        download icon in the viewer.
      </p>
    </main>
  );
}
