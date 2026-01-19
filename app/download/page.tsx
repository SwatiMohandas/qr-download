"use client";

type FileKey = "pdf1" | "pdf2" | "mp4";

const FILES: { key: FileKey; label: string }[] = [
  { key: "pdf1", label: "Download THAI BROCHURE (PDF)" },
  { key: "pdf2", label: "Download TT Vector Malabar Mango Catalogue (PDF)" },
  { key: "mp4", label: "Download Team Thai Final (MP4)" },
];

export default function DownloadPage() {
  const startDownload = (key: FileKey) => {
    // Create a temporary anchor instead of mutating window.location
    const a = document.createElement("a");
    a.href = `/api/dl?key=${key}`;
    a.rel = "noreferrer";
    a.target = "_self"; // ensures download happens in same tab
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <main className="download-page">
      <h1 className="title">Download Files</h1>
      <p className="subtitle">Tap a button to download.</p>

      <div className="btn-group">
        {FILES.map((f) => (
          <button
            key={f.key}
            onClick={() => startDownload(f.key)}
            className="download-btn"
          >
            {f.label}
          </button>
        ))}
      </div>

      <style jsx>{`
        .download-page {
          min-height: 100vh;
          padding: 24px;
          font-family: system-ui, sans-serif;
          background-color: #f9fafb;
          color: #111827;
        }

        .title {
          font-size: 22px;
          margin-bottom: 6px;
        }

        .subtitle {
          margin-bottom: 20px;
          color: #374151;
        }

        .btn-group {
          display: grid;
          gap: 14px;
          max-width: 520px;
        }

        .download-btn {
          padding: 14px 16px;
          font-size: 16px;
          text-align: left;
          border-radius: 12px;
          border: 1px solid #d1d5db;
          background-color: #ffffff;
          color: #111827;
          cursor: pointer;
        }

        @media (prefers-color-scheme: dark) {
          .download-page {
            background-color: #0f172a;
            color: #f9fafb;
          }

          .subtitle {
            color: #cbd5f5;
          }

          .download-btn {
            background-color: #1e293b;
            color: #f9fafb;
            border: 1px solid #334155;
          }
        }
      `}</style>
    </main>
  );
}
