import Hero from "@/components/Hero";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <Hero />
      <section className="container pb-16">
        <div className="card">
          <h2 className="text-2xl font-semibold">Featured</h2>
          <p className="mt-3 text-gray-700">
            Hand‑picked projects that show product sense and systems depth.
          </p>
          <Link className="link mt-4 inline-block" href="/projects">See all projects</Link>
        </div>
      </section>
    </main>
  );
}
