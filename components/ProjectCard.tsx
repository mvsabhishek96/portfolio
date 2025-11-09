import Link from "next/link";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="card">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">{p.title}</h3>
          <p className="mt-2 text-gray-700">{p.description}</p>
          {p.highlights && (
            <ul className="list-disc ml-6 mt-3 text-sm text-gray-700">
              {p.highlights.map((h, i) => <li key={i}>{h}</li>)}
            </ul>
          )}
          <div className="mt-4 flex gap-3 text-sm">
            {p.repo && <Link className="link" href={p.repo}>Repo</Link>}
            {p.demo && <Link className="link" href={p.demo}>Live</Link>}
          </div>
        </div>
        <div className="text-xs text-gray-600">{p.tags.join(" • ")}</div>
      </div>
    </div>
  );
}
