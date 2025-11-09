import ProjectCard from "@/components/ProjectCard";
import { featured } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <main className="container pb-16">
      <h1 className="text-3xl font-bold my-6">Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {featured.map((p, i) => <ProjectCard key={i} p={p} />)}
      </div>
    </main>
  );
}
