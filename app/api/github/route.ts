import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://api.github.com/users/mvsabhishek96/repos?per_page=100", {
      headers: { "User-Agent": "abhi-portfolio" },
      cache: "no-store"
    });
    const data = await res.json();
    const simplified = data.map((r: any) => ({
      name: r.name,
      html_url: r.html_url,
      description: r.description,
      language: r.language,
      stars: r.stargazers_count,
      forks: r.forks_count,
      updated_at: r.updated_at
    }));
    return NextResponse.json(simplified);
  } catch (e) {
    return NextResponse.json({ error: "failed to fetch" }, { status: 500 });
  }
}
