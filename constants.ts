import { Github, Linkedin, Mail, Twitter, Instagram } from 'lucide-react';
import { NavItem, ExperienceItem, ProjectItem, Skill, EducationItem, SocialLink, TestimonialItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export const SKILLS: Skill[] = [
  { name: 'React.js', category: 'Frontend', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'TypeScript', category: 'Frontend', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
  { name: 'Next.js', category: 'Frontend', icon: 'https://cdn.simpleicons.org/nextdotjs/ffffff' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  { name: 'Node.js', category: 'Backend', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
  { name: 'PostgreSQL', category: 'Backend', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
  { name: 'GraphQL', category: 'Backend', icon: 'https://cdn.simpleicons.org/graphql/E10098' },
  { name: 'Python', category: 'Backend', icon: 'https://cdn.simpleicons.org/python/3776AB' },
  { name: 'Docker', category: 'Tools', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
  { name: 'AWS', category: 'Tools', icon: 'https://cdn.simpleicons.org/amazonwebservices/FF9900' },
  { name: 'Git', category: 'Tools', icon: 'https://cdn.simpleicons.org/git/F05032' },
  { name: 'Figma', category: 'Design', icon: 'https://cdn.simpleicons.org/figma/F24E1E' },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'Tech Innovators Inc.',
    role: 'Senior Fullstack Developer',
    period: '2022 - Present',
    description: 'Leading a team of 5 developers in building scalable cloud-native applications. Optimized database queries reducing load times by 40%.',
    technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL'],
  },
  {
    company: 'Creative Solutions Studio',
    role: 'Fullstack Developer',
    period: '2020 - 2022',
    description: 'Developed and maintained client-facing e-commerce platforms. implemented secure payment gateways and real-time inventory tracking.',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Redis'],
  },
  {
    company: 'StartUp Alpha',
    role: 'Frontend Developer',
    period: '2018 - 2020',
    description: 'Collaborated with designers to translate high-fidelity mockups into responsive, interactive user interfaces using React and Redux.',
    technologies: ['React', 'Redux', 'SASS', 'Firebase'],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    title: 'Nexus Dashboard',
    description: 'A comprehensive analytics dashboard featuring real-time data visualization, user management, and automated reporting systems.',
    image: 'https://picsum.photos/800/600?random=1',
    tags: ['React', 'D3.js', 'Node.js', 'MongoDB'],
    link: '#',
    github: '#',
  },
  {
    title: 'E-Commerce Core',
    description: 'A headless e-commerce solution built for high performance and scalability, handling over 10k transactions daily.',
    image: 'https://picsum.photos/800/600?random=2',
    tags: ['Next.js', 'GraphQL', 'PostgreSQL', 'Docker'],
    link: '#',
    github: '#',
  },
  {
    title: 'AI Content Generator',
    description: 'SaaS application leveraging Gemini API to generate marketing copy and blog posts with a clean, distraction-free editor.',
    image: 'https://picsum.photos/800/600?random=3',
    tags: ['TypeScript', 'OpenAI API', 'Tailwind', 'Supabase'],
    link: '#',
    github: '#',
  },
  {
    title: 'TaskMaster Pro',
    description: 'Collaborative project management tool with real-time updates via WebSockets and drag-and-drop Kanban boards.',
    image: 'https://picsum.photos/800/600?random=4',
    tags: ['Vue.js', 'Firebase', 'Tailwind', 'Jest'],
    link: '#',
    github: '#',
  }
];

export const EDUCATION: EducationItem[] = [
  {
    institution: 'University of Indonesia',
    degree: 'Bachelor of Computer Science',
    year: '2014 - 2018',
    description: 'Specialized in Software Engineering and Artificial Intelligence. Graduated with Honors (Cum Laude).',
  },
  {
    institution: 'Google Developer Certification',
    degree: 'Professional Cloud Architect',
    year: '2021',
  },
];

export const SOCIALS: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com', icon: Github },
  { platform: 'LinkedIn', url: 'https://linkedin.com', icon: Linkedin },
  { platform: 'Twitter', url: 'https://twitter.com', icon: Twitter },
  { platform: 'Instagram', url: 'https://instagram.com', icon: Instagram },
  { platform: 'Email', url: 'mailto:malix@example.com', icon: Mail },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    clientName: 'James H.',
    clientCountry: 'United States',
    avatar: 'https://i.pravatar.cc/150?u=1',
    platform: 'Upwork',
    projectTitle: 'Full Stack React/Node Developer for SaaS MVP',
    rating: 5.0,
    content: "Malix is an absolute gem. He took our MVP from concept to launch in record time. His understanding of AWS architecture and React best practices saved us thousands in potential technical debt. Highly recommended!",
    date: 'Oct 2023'
  },
  {
    id: 2,
    clientName: 'Sarah L.',
    clientCountry: 'Germany',
    avatar: 'https://i.pravatar.cc/150?u=2',
    platform: 'Freelancer',
    projectTitle: 'Fix Complex API Issues on Python Backend',
    rating: 5.0,
    content: "Extremely professional and knowledgeable. Malix fixed a bug that 3 other developers couldn't solve in just a few hours. Communication was excellent throughout the process.",
    date: 'Sep 2023'
  },
  {
    id: 3,
    clientName: 'Michael R.',
    clientCountry: 'United Kingdom',
    avatar: 'https://i.pravatar.cc/150?u=3',
    platform: 'Upwork',
    projectTitle: 'Convert Figma Designs to Responsive Next.js',
    rating: 5.0,
    content: "Pixel perfect implementation! The animations are buttery smooth and the code is very clean. He even added some accessibility features we didn't think of. Will hire again.",
    date: 'Aug 2023'
  },
  {
    id: 4,
    clientName: 'Daniel K.',
    clientCountry: 'Canada',
    avatar: 'https://i.pravatar.cc/150?u=4',
    platform: 'Upwork',
    projectTitle: 'Long-term Frontend Developer for Fintech App',
    rating: 5.0,
    content: "Malix has been a core part of our team for the last 6 months. He consistently delivers high-quality code and proactively suggests improvements. A true professional.",
    date: 'July 2023'
  },
  {
    id: 5,
    clientName: 'Emma W.',
    clientCountry: 'Australia',
    avatar: 'https://i.pravatar.cc/150?u=5',
    platform: 'Freelancer',
    projectTitle: 'Web Scraping & Data Automation Script',
    rating: 5.0,
    content: "Fast, efficient, and reliable. The script works perfectly and handles edge cases well. Malix provided great documentation too.",
    date: 'June 2023'
  },
  {
    id: 6,
    clientName: 'David B.',
    clientCountry: 'Singapore',
    avatar: 'https://i.pravatar.cc/150?u=6',
    platform: 'Upwork',
    projectTitle: 'MERN Stack Developer for E-commerce',
    rating: 4.9,
    content: "Great experience working with Malix. He is very responsive and technically strong. Delivered the project on time and within budget.",
    date: 'May 2023'
  }
];