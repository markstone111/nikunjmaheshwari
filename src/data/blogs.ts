export interface Blog {
  id: string;
  title: string;
  description: string;
  pills: string[]; // e.g., ["eGuide", "Free"], ["Tutorial", "AI/ML"] 
  imageUrl: string;
  shadowColor: string; // e.g., "bg-brutal-pink"
  link: string; // The URL to full markdown/Devpost/Medium article
}

export const blogsData: Blog[] = [
  {
    id: "write-your-bio",
    title: "WRITE YOUR BIO LIKE A PRO",
    description: "Talking about yourself can feel weird. Lucky for you, I've made a career out of it. I'll teach you how to showcase your experience, how to embellish without lying, and generate interest that makes you money.",
    pills: ["eGuide", "Free"],
    imageUrl: "https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=800&q=80", 
    shadowColor: "bg-brutal-pink",
    link: "/blogs"
  },
  {
    id: "goals-setting",
    title: "GOALS: HOW TO SET & GET THEM",
    description: "Learn everything I know about goal-setting, from finding your vision to tactical planning, and, of course, how to get the shit actually done.",
    pills: ["eGuide", "Free"],
    imageUrl: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80",
    shadowColor: "bg-brutal-blue",
    link: "/blogs"
  }
];
