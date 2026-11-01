export type CertCategory = 'All' | 'AI / ML' | 'Hackathons' | 'Development' | 'Design' | 'Career';

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  category: Exclude<CertCategory, 'All'>;
  credentialUrl?: string;
  credentialId?: string;
  skills?: string[];
  imageUrl: string; // Place your certificate images in /public/assets/certificates/
  description?: string;
}

export const certificationsData: Certification[] = [
  {
    id: 'genai-hackathon',
    name: 'Gen AI Exchange Hackathon',
    issuer: 'Google',
    date: 'Jan 2026',
    category: 'Hackathons',
    credentialId: '2025H2S08GH-P900885',
    skills: ['Team Management', 'Node.js', 'Gen AI'],
    imageUrl: '/assets/certificates/genai-hackathon.png',
    description: 'Shortlisted among 4,400 teams and 270,000 developers.',
  },
  {
    id: 'android-kotlin',
    name: 'Android & Kotlin Development',
    issuer: 'Udemy',
    date: 'Feb 2026',
    category: 'Development',
    credentialUrl: 'https://www.udemy.com/certificate/UC-a95d6120-69aa-4c9c-af00-61f021d9bd91/',
    credentialId: 'UC-a95d6120-69aa-4c9c-af00-61f021d9bd91',
    skills: ['Kotlin', 'Kotlin Coroutines', 'Android'],
    imageUrl: '/assets/certificates/android-kotlin.png',
  },
  {
    id: 'canva-design',
    name: 'Canva for Graphics Design & Video Editing',
    issuer: 'Udemy',
    date: 'Feb 2026',
    category: 'Design',
    credentialUrl: 'https://www.udemy.com/certificate/UC-05032f73-2e2f-43b4-a21e-e52573336753/',
    credentialId: 'UC-05032f73-2e2f-43b4-a21e-e52573336753',
    skills: ['Canva', 'Graphic Design', 'Video Editing'],
    imageUrl: '/assets/certificates/canva-design.png',
  },
  {
    id: 'ai-for-good',
    name: 'AI for Good 2025 Hackathon',
    issuer: 'Blend360',
    date: 'Aug 2025',
    category: 'Hackathons',
    skills: ['Django', 'Teamwork', 'AI', 'Python'],
    imageUrl: '/assets/certificates/ai-for-good.png',
    description: 'Participated in the AI for Good Hackathon 2025, Hyderabad.',
  },
  {
    id: 'intro-genai',
    name: 'Introduction to Generative AI',
    issuer: 'SkillUp by Simplilearn',
    date: 'Jun 2025',
    category: 'AI / ML',
    credentialId: '8538266',
    skills: ['Generative AI', 'LLMs'],
    imageUrl: '/assets/certificates/intro-genai.png',
  },
  {
    id: 'ds-ml-workshop',
    name: 'Data Science & ML Workshop',
    issuer: 'GDG On Campus NEHU',
    date: 'Apr 2025',
    category: 'AI / ML',
    skills: ['Data Science', 'Machine Learning'],
    imageUrl: '/assets/certificates/ds-ml-workshop.png',
  },
  {
    id: 'internship-ai',
    name: 'Internship in AI',
    issuer: 'Edunet Foundation',
    date: 'Mar 2025',
    category: 'AI / ML',
    credentialId: 'TSPIN24_609989',
    skills: ['OpenCV', 'Python', 'Computer Vision'],
    imageUrl: '/assets/certificates/internship-ai.png',
    description: 'Project: Human Pose Estimation.',
  },
  {
    id: 'internship-ai-data',
    name: 'Internship in AI & Data Analytics',
    issuer: 'Edunet Foundation',
    date: 'Mar 2025',
    category: 'AI / ML',
    skills: ['Artificial Intelligence', 'Data Analytics', 'Green Skills'],
    imageUrl: '/assets/certificates/internship-ai-data.png',
    description: 'Focus on AI & Data Analytics with Green Skills.',
  },
  {
    id: 'solution-challenge',
    name: 'Solution Challenge Hackathon',
    issuer: 'Google Developer Groups',
    date: 'Jan 2025',
    category: 'Hackathons',
    skills: ['Google Technologies', 'Problem Solving'],
    imageUrl: '/assets/certificates/solution-challenge.png',
    description: "Developed Athelet connection and netwroking platform to connect athelets with each other and provide them with fitness related information and connect them with coaches and trainers.",
  },
  {
    id: 'placement-prep',
    name: 'Placement Prep Bootcamp',
    issuer: 'LetsUpgrade',
    date: 'Oct 2024',
    category: 'Career',
    credentialUrl: 'https://verify.letsupgrade.in/certificate/LUEPPOCT124822',
    credentialId: 'LUEPPOCT124822',
    skills: ['Interview Prep', 'Job Placements'],
    imageUrl: '/assets/certificates/placement-prep.png',
  },
  {
    id: 'gen-ai-study-jam',
    name: 'Gen AI Study Jam 2024',
    issuer: 'GDG On Campus NEHU',
    date: 'Sep 2024',
    category: 'AI / ML',
    skills: ['Generative AI', 'Prototyping'],
    imageUrl: '/assets/certificates/gen-ai-study-jam.png',
  },
];
