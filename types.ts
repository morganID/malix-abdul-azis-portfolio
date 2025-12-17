import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Design';
  icon?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  year: string;
  description?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}

export interface TestimonialItem {
  id: number;
  clientName: string;
  clientCountry: string; // e.g., "United States", "Germany"
  avatar: string;
  platform: 'Upwork' | 'Freelancer';
  projectTitle: string;
  rating: number;
  content: string;
  date: string;
}