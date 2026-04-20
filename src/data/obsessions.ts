export interface Obsession {
  id: string;
  title: string;
  status: "learning" | "obsessing" | "dreaming" | "planning" | "why not" | string;
  colorClass: string;
}

export const obsessionsData: Obsession[] = [
  {
    id: "webrtc",
    title: "WebRTC & WebSockets",
    status: "learning",
    colorClass: "bg-[#FFD3B6]" // Pastel Orange
  },
  {
    id: "gen-ai",
    title: "Math of AI / ML",
    status: "obsessing",
    colorClass: "bg-[#E0BBE4]" // Pastel Purple
  },
  {
    id: "compiler",
    title: "Build a compiler",
    status: "planning",
    colorClass: "bg-[#957DAD]" // Darker Pastel Purple
  },
  {
    id: "rust-os",
    title: "Write an OS in Rust",
    status: "dreaming",
    colorClass: "bg-[#FFDFD3]" // Pastel Pink
  },
  {
    id: "custom-pwa",
    title: "Native-level PWAs",
    status: "why not",
    colorClass: "bg-[#D291BC]" // Pink/Purple
  },
  {
    id: "threejs",
    title: "Three.js 3D Rendering",
    status: "obsessing",
    colorClass: "bg-[#FEC8D8]" // Light Pink
  }
];
