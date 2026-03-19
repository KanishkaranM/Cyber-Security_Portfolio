import { Github, Linkedin, Terminal, Shield, Globe, Lock, Instagram } from 'lucide-react';
import { Project, Skill, NavItem, SocialLink } from './types';

export const USER_INFO = {
  name: "Kanishkaran",
  role: "Cyber Security Enthusiast",
  subRole: "B.Voc Software Development Student",
  university: "Alagappa University",
  bio: "I am a passionate security researcher and software developer bridging the gap between secure code and offensive security. My mission is to build resilient systems and uncover vulnerabilities before bad actors do.",
  tryHackMeUsername: "KANISHKARAN",
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Labs', href: '#labs' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com', icon: Github },
  { platform: 'LinkedIn', url: 'https://linkedin.com', icon: Linkedin },
  { platform: 'TryHackMe', url: 'https://tryhackme.com/p/KANISHKARAN', icon: Shield },
  { platform: 'Instagram', url: 'https://instagram.com', icon: Instagram },
];

export const SKILLS: Skill[] = [
  { name: 'Networking (OSI, TCP/IP)', level: 80, category: 'Network' },
  { name: 'Linux Administration', level: 50, category: 'OS' },
  { name: 'Windows Security', level: 50, category: 'OS' },
  { name: 'Web App Security (OWASP)', level: 50, category: 'Web' },
  { name: 'Burp Suite', level: 50, category: 'Tools' },
  { name: 'Nmap & Wireshark', level: 50, category: 'Tools' },
  { name: 'Metasploit', level: 60, category: 'Tools' },
  { name: 'Bug Bounty Hunting', level: 65, category: 'Web' },
  { name: 'Python for Security', level: 65, category: 'Tools' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Cyber Security Portfolio",
    description: "A Cyber Security Portfolio is a collection of projects and resources that demonstrate a person's skills and knowledge in cybersecurity.",
    tags: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "React"],
    github: "https://github.com",
  },
  {
    id: 2,
    title: "Intrusion Detection System (IDS)",
    description: "An Intrusion Detection System (IDS) monitors network or system activity to detect and alert on potential security threats or unauthorized access.",
    tags: ["Python", "React", "Automation"],
    github: "https://github.com",
  },
  {
    id: 3,
    title: "CTF Challenges",
    description: "A Capture The Flag (CTF) challenge is a cybersecurity competition where participants solve security-related problems to find hidden flags.",
    tags: ["Linux", "OSIND", "Web"],
    github: "https://github.com",
  },
  // {
  //   id: 4,
  //   title: "Cocomaxi",
  //   description: "A system utility tool that analyzes background processes to detect signatures of common keylogging software.",
  //   tags: ["C++", "Windows API", "Malware Analysis"],
  //   github: "https://github.com",
  // },
];