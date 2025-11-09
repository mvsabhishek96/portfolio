import { site } from "@/site.config";
export default function Footer() {
  return (
    <footer className="container py-10 text-sm text-gray-600">
      <div className="flex items-center justify-between">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <div className="flex gap-4">
          <a href={site.github}>GitHub</a>
          <a href={site.linkedin}>LinkedIn</a>
          <a href={site.email}>Email</a>
        </div>
      </div>
    </footer>
  );
}
