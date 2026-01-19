import { NextResponse } from "next/server";

const FILES = {
  pdf1: {
    id: "1Zo-eqq9EGc53LLjQGQ7q1AnzjFMYZGLk",
    filename: "THAI BROCHURE.pdf",
    contentType: "application/pdf",
  },
  pdf2: {
    id: "18rU86gXtk1rD7zR1728K-k4-t9Xh9AY9",
    filename: "TT_Vector Malabar_Mango Catalogue_Gulfood_AW.pdf",
    contentType: "application/pdf",
  },
  mp4: {
    id: "1K8G43LWFJ7LxbaJ9Ggutn0H3mJlXNPbm",
    filename: "team thai final.mp4",
    contentType: "video/mp4",
  },
} as const;

type FileKey = keyof typeof FILES;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const key = searchParams.get("key") as FileKey | null;

  if (!key || !(key in FILES)) {
    return NextResponse.json({ error: "Invalid file key" }, { status: 400 });
  }

  const file = FILES[key];

  const driveUrl = `https://drive.google.com/uc?export=download&id=${file.id}`;

  const driveRes = await fetch(driveUrl, {
    headers: {
      "User-Agent": "Mozilla/5.0",
    },
    redirect: "follow",
  });

  if (!driveRes.ok || !driveRes.body) {
    return NextResponse.json(
      { error: "Failed to fetch file from Google Drive" },
      { status: 502 }
    );
  }

  const headers = new Headers();
  headers.set("Content-Type", file.contentType);
  headers.set(
    "Content-Disposition",
    `attachment; filename="${file.filename}"`
  );

  const len = driveRes.headers.get("content-length");
  if (len) headers.set("Content-Length", len);

  return new NextResponse(driveRes.body, { headers });
}
