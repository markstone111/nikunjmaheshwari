export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  orgUrl?: string;
  period: string;
  location: string;
  badge: string;
  badgeColor: 'green' | 'yellow' | 'pink' | 'blue' | 'purple';
  responsibilities: string[];
  technologies: string[];
  metric?: string;
}

export const experiencesData: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Software Engineer Intern',
    organization: 'Acme Systems / Tech Corp',
    orgUrl: 'https://example.com',
    period: 'JAN 2024 - PRESENT',
    location: 'Remote, India',
    badge: 'CURRENT ROLE',
    badgeColor: 'green',
    responsibilities: [
      'Architected and implemented high-performance cross-platform mobile features using Flutter and Kotlin, reducing API latency by 35%.',
      'Integrated real-time state management and offline-first database synchronization using SQLite and Jetpack DataStore.',
      'Collaborated closely with cross-functional product and backend teams to deliver production-ready features on two-week agile sprints.',
      'Engineered automated CI/CD deployment pipelines, cutting release delivery turnaround by 40%.'
    ],
    technologies: ['Flutter', 'Kotlin', 'Android SDK', 'Dart', 'Firebase', 'REST APIs'],
    metric: '35% Latency Reduction // 10k+ Monthly Users'
  },
  {
    id: 'exp-2',
    role: 'Android & Flutter Developer',
    organization: 'Startup Labs / Indie Studio',
    orgUrl: 'https://example.com',
    period: 'JUL 2023 - DEC 2023',
    location: 'Hybrid, India',
    badge: 'INTERNSHIP',
    badgeColor: 'yellow',
    responsibilities: [
      'Spearheaded the development of core UI modules with Jetpack Compose following clean MVVM architecture patterns.',
      'Integrated responsive custom UI components, push notification services, and seamless payment gateway workflows.',
      'Refactored legacy codebases to improve test coverage from 45% to over 80% with unit and integration testing.'
    ],
    technologies: ['Jetpack Compose', 'Kotlin', 'Coroutines', 'Retrofit', 'Room DB'],
    metric: '80%+ Test Coverage // 99.8% Crash-Free Rate'
  },
  {
    id: 'exp-3',
    role: 'AI / Full Stack Project Lead',
    organization: 'University Innovation & Tech Club',
    orgUrl: 'https://example.com',
    period: 'AUG 2022 - MAY 2023',
    location: 'Shillong, India',
    badge: 'CAMPUS LEADERSHIP',
    badgeColor: 'blue',
    responsibilities: [
      'Mentored 40+ engineering juniors in Python, Git, and full-stack software development best practices.',
      'Led the team that built an AI-assisted smart attendance and student activity dashboard using FastAPI and OpenCV.',
      'Organized multiple hackathons and tech workshops focused on mobile app development and applied machine learning.'
    ],
    technologies: ['Python', 'OpenCV', 'React', 'FastAPI', 'Tailwind CSS', 'Git'],
    metric: 'Mentored 40+ Students // 3 Hackathon Wins'
  }
];
