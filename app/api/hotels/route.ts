import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.search);

  // Panggil API eksternal dengan parameter yang diterima
  const response = await fetch(
    `https://ota-gin.onrender.com/api/v1/?${searchParams}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store", // Agar selalu fresh, bisa diubah jadi "force-cache" jika perlu caching
    }
  );

  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: response.status }
    );
  }

  const data = await response.json();
  return NextResponse.json(data);
}
