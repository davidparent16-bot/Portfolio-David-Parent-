export const personal = {
  name: 'David Parent',
  title: 'Full-Stack Developer',
  tagline: 'I build things for the web — and sometimes break them on purpose.',
  email: 'david.parent16@outlook.fr',
  github: 'https://github.com/davidparent16-bot',
  location: 'France',
  bio: `Developer obsessed with clean architecture, honest interfaces, and code that outlasts the project that birthed it.
I believe software should serve people, not the other way around.
When I'm not shipping, I'm reading, drawing systems diagrams, or arguing about tab vs. spaces (tabs, obviously).`,
}

export const skills = [
  { name: 'React', level: 90, category: 'Frontend' },
  { name: 'TypeScript', level: 85, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'Frontend' },
  { name: 'Node.js', level: 80, category: 'Backend' },
  { name: 'Python', level: 75, category: 'Backend' },
  { name: 'PostgreSQL', level: 70, category: 'Backend' },
  { name: 'Docker', level: 65, category: 'DevOps' },
  { name: 'Git', level: 90, category: 'DevOps' },
]

export const projects = [
  {
    id: 1,
    title: 'Portfolio v3',
    description:
      'This very site. Brutalist design system built with React, Tailwind CSS, and Framer Motion. No templates, no themes — raw craft.',
    tags: ['React', 'Tailwind', 'Framer Motion', 'Vite'],
    accent: '#f5e642',
    github: 'https://github.com/davidparent16-bot/Portfolio-David-Parent-',
    live: '#',
  },
  {
    id: 2,
    title: 'API Forge',
    description:
      'REST API boilerplate generator with auth, rate-limiting, and OpenAPI docs baked in. Cut project setup time by 80%.',
    tags: ['Node.js', 'Express', 'TypeScript', 'PostgreSQL'],
    accent: '#1a1aff',
    github: '#',
    live: null,
  },
  {
    id: 3,
    title: 'DataPipe CLI',
    description:
      'Command-line ETL tool for transforming messy CSV/JSON data into clean schemas. Used in production by 3 teams.',
    tags: ['Python', 'Click', 'Pandas', 'Docker'],
    accent: '#e63227',
    github: '#',
    live: null,
  },
  {
    id: 4,
    title: 'NotionSync',
    description:
      'Bidirectional sync between Notion databases and local markdown files. Keep your notes in Git without losing Notion features.',
    tags: ['TypeScript', 'Notion API', 'Node.js'],
    accent: '#0a0a0a',
    github: '#',
    live: null,
  },
]

export const experience = [
  {
    role: 'Full-Stack Developer',
    company: 'Freelance',
    period: '2022 — Present',
    description: 'Building web applications and internal tools for clients across e-commerce, SaaS, and fintech.',
  },
  {
    role: 'Junior Developer',
    company: 'Tech Startup',
    period: '2020 — 2022',
    description: 'Shipped features for a B2B SaaS platform, reduced load times by 40%, and introduced TypeScript to the codebase.',
  },
]
