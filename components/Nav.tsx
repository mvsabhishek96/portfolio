'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" }
  ];
  return (
    <nav className="container py-6 flex items-center justify-between">
      <Link href="/" className="font-semibold">abhi.dev</Link>
      <div className="flex gap-6">
        {links.map(l => (
          <Link key={l.href} href={l.href}
            className={pathname === l.href ? "font-medium" : "text-gray-600 hover:text-black"}>
            {l.label}
          </Link>
        ))}
        <a href="mailto:you@example.com" className="text-gray-600 hover:text-black">Contact</a>
      </div>
    </nav>
  );
}
