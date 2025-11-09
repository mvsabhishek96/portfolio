export type Project = {
  title: string;
  description: string;
  highlights?: string[];
  repo?: string;
  demo?: string;
  tags: string[];
};

export const featured: Project[] = [
  {
    title: "PiCaster",
    description: "Raspberry Pi live-stream encoder + control plane",
    highlights: ["HLS over Nginx-RTMP", "Web UI in Next.js", "Remote control via Tailscale"],
    repo: "",
    demo: "",
    tags: ["Video", "Raspberry Pi", "Next.js", "DevOps"]
  },
  {
    title: "StockSim",
    description: "Paper trading simulator with event-driven backend",
    highlights: ["WebSockets", "CQRS", "Docker Compose"],
    tags: ["Node", "WebSocket", "Postgres", "Docker"]
  }
];
