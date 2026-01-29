// Types
export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  tags: string[]
  website?: string
  icon?: string
}

export type ActivityItemType = {
  name: string
  description: string
  date: string
  location: string
  link?: string
}

export type ProjectSectionType = {
  title: string
  items: Array<ProjectItemType>
}

// Awards
export const awardsHeadLine = "Awards & Honors"
export const awardsIntro = "Recognition for academic and professional achievements."

export const awards: Array<ActivityItemType> = [
  {
    name: 'The 7th Global Campus Artificial Intelligence Algorithm Elite Competition in 2025',
    description: 'National First Prize',
    date: '2025.12',
    location: 'Beijing',
  },
  {
    name: '2025 National College Student Mathematical Modeling Competition',
    description: 'Shanghai Second Prize',
    date: '2025',
    location: 'Shanghai',
  },
  {
    name: '2024 National Scholarship',
    description: '￥10000 prize',
    date: '2024',
    location: 'Shanghai',
  },
  {
    name: 'The 6th Huashu Cup Mathematical Modeling Competition',
    description: 'National Third Prize',
    date: '2025.8.10',
    location: 'Shanghai',
  },
  {
    name: 'The 9th IC-Innovation Challenge - JYD Cup',
    description: 'East China Division Third Prize',
    date: '2025.7.31',
    location: 'Shanghai',
  },
  {
    name: 'MothorCup Mathematical Modeling Competition',
    description: 'Shanghai Third Prize',
    date: '2025.4.18',
    location: 'Shanghai',
  },
  {
    name: 'Mathematical Contest In Modeling',
    description: 'Successful Participant',
    date: '2025.1.24',
    location: 'Shanghai',
  },
  {
    name: '2024 National College English Translation Competition',
    description: 'The third prize',
    date: '2024.11.1',
    location: 'Shanghai',
  },
  {
    name: '2024 National College Student Mathematical Modeling Competition',
    description: 'Shanghai Third Prize',
    date: '2024.9.5',
    location: 'Shanghai',
  },
  {
    name: 'Tongji University Freshman Structure Competition',
    description: 'The third prize',
    date: '2023.12.5',
    location: 'Tongji,Shanghai',
  },

]

// Research & Projects
export const projectHeadLine = "Research & Projects"
export const projectIntro = "Academic research and technical projects I've worked on."

const courseworkProjects: Array<ProjectItemType> = [
  {
    name: 'e203-htmi-fpga',
    description: 'A character terminal system mounted on a Hummingbird e203',
    link: { href: 'github.com/yys806/e203-htmi-fpga.git', label: 'View Course' },
    tags: ['Embedded Systems', 'e203', 'Hummingbird'],
    icon: '/images/icon/github.png',
  },
  {
    name: 'e203-RISC-V-counter',
    description: 'A RISCV counter mounted on a Hummingbird e203',
    link: { href: 'github.com/yys806/e203-RISCV-counter.git', label: 'View Course' },
    tags: ['Embedded Systems', 'e203', 'Hummingbird', 'counter'],
    icon: '/images/icon/github.png',
  },
  {
    name: 'Distributed parallel computing system',
    description: '2025 Algorithm Major Project',
    link: { href: 'github.com/yys806/shen-kai.git', label: 'View Course' },
    tags: ['Algorithm', 'OpenMp', 'SSE', 'Distributed'],
    icon: '/images/icon/github.png',
  },
  {
    name: 'Text recognizer based on STM32G0 and infrared sensors',
    description:
      'A project focused on developing a text recognition system using STM32G0 microcontroller and infrared sensors.',
    link: {
      href: 'pub-fae7c18af59f40679cbe76ee23a170c8.r2.dev/%E9%A1%B9%E7%9B%AE/2352396-%E7%A6%B9%E5%B0%A7%E7%8F%85-%E6%96%87%E5%AD%97%E8%AF%86%E5%88%AB%E5%99%A8-%E8%AE%BE%E8%AE%A1%E6%8A%A5%E5%91%8A.pdf',
      label: 'View Course',
    },
    tags: ['Embedded Systems', 'STM32', 'Infrared Sensors', 'AI', 'Computer Vision'],
    icon: '/images/icon/shen.png',
  },
]

const webDevProjects: Array<ProjectItemType> = [
  {
    name: 'MathSnap',
    description: 'a website used for paper reading and Latex converting, as well as some picture process',
    link: { href: 'github.com/yys806/research-helper', label: 'View Course' },
    website: '2352396.de5.net',
    tags: ['Gemini', 'Netlify', 'Latex','paper', 'OCR', 'siliconing'],
    icon: '/images/icon/shen.png',
  },
  {
    name: 'Shen’s tools',
    description: 'a website that collect all my tools needed for study and life',
    link: { href: 'github.com/yys806/AI-tool', label: 'View Course' },
    website: 'riscv.de5.net',
    tags: ['Gemini', 'Netlify', 'Latex','error', 'QR code', 'unit converter'],
    icon: '/images/icon/shen.png',
  },
  {
    name: 'Cyber AI Divination',
    description: 'Cyber AI Fortune-telling Website',
    link: { href: 'github.com/yys806/Divination', label: 'View Course' },
    website: 'fpga.de5.net',
    tags: ['Gemini', 'Netlify', 'Gossip',' Xiao Liu Ren', 'Plum Blossom Divination'],
    icon: '/images/icon/shen.png',
  },
  {
    name: 'Nexus Terminal',
    description: 'a website that like javis in the Ironman movies',
    link: { href: 'github.com/yys806/shenge-gpt', label: 'View Course' },
    website: 'shen-play.de5.net',
    tags: ['Gemini', 'Netlify', 'playwright', 'javis-like'],
    icon: '/images/icon/shen.png',
  },
  {
    name: 'Homepage',
    description: 'my recent plan and some of my website',
    link: { href: 'github.com/yys806/Homepage.git', label: 'View Course' },
    website: 'shen806.dpdns.org',
    tags: ['Gemini', 'Netlify', 'Supbase', 'Front-end and back-end'],
    icon: '/images/icon/homepage.jpg',
  },
  {
    name: 'Fortress',
    description: 'A tool to restore local important data',
    link: { href: 'github.com/yys806/Fortress.git', label: 'View Course' },
    website: 'shentv.dpdns.org',
    tags: ['Gemini', 'storage'],
    icon: '/images/icon/Fortress.png',
  },
  {
    name: '428806QR-tool',
    description: 'A tool to generate Unique QR code',
    link: { href: 'github.com/yys806/QR-tool.git', label: 'View Course' },
    website: '428806.xyz',
    tags: ['Gemini', 'Netlify', 'Adsence', 'Front-end and back-end'],
    icon: '/images/icon/QR-tool.png',
  },
  {
    name: 'Image removal tool',
    description: 'A tool to remove black borders from images',
    link: { href: 'github.com/yys806/Picture-process.git', label: 'View Course' },
    website: 'shen-photo.de5.net',
    tags: ['Gemini', 'Photo-processer'],
    icon: '/images/icon/shen.png',
  },
]

const researchProjects: Array<ProjectItemType> = [
  {
    name: 'Tongji University Quality Control Office Agent Development',
    description: 'An intelligent agent to assist the Quality Control Office in managing and analyzing quality data.',
    link: { href: 'agent.tongji.edu.cn/product/llm/chat/d4ksjeglmqe6v2jvltfg', label: 'View Course' },
    tags: ['Workflow', 'Automation', 'Python', 'AI', 'Deepseek'],
    icon: '/images/icon/tongji.jpg',
  },
  {
    name: 'Research and development of intelligent passenger flow sensing and optimized carriage allocation system for subway trains',
    description: 'Shanghai Municipal University Student Innovation and Entrepreneurship Project',
    link: {
      href: 'pub-fae7c18af59f40679cbe76ee23a170c8.r2.dev/%E8%8E%B7%E5%A5%96/2024-2025/SITP%E7%BB%93%E9%A2%98%E8%AF%81%E4%B9%A6.pdf',
      label: 'View Course',
    },
    tags: ['Civil Engineering', 'Computer Vision', 'Raspberry Pi'],
    icon: '/images/icon/shen.png',
  },
  {
    name: 'Little Wang Robot Dog v1.0',
    description: 'A robotic dog designed for companionship and assistance.',
    link: {
      href: 'oshwhub.com/hanbing666/tian-ji-xiao-wang-wang-xing-xing-da-lao-zhuan-shu-ban',
      label: 'View Course',
    },
    tags: ['PCB Design', 'Welding', 'TianWen', 'AI', 'Servo'],
    icon: '/images/icon/shen.png',
  },
  {
    name: 'Xiao Zhi AI Chatbot',
    description: 'An AI chatbot designed for natural language understanding and conversation.',
    link: { href: 'github.com/78/xiaozhi-esp32', label: 'View Course' },
    tags: ['PCB Design', '3D Printing', 'MCP', 'Python', 'AI Chat', 'LLM'],
    icon: '/images/icon/github.png',
  },
]

export const projectSections: Array<ProjectSectionType> = [
  { title: '校内大作业', items: courseworkProjects },
  { title: '网站开发', items: webDevProjects },
  { title: '科研研究与项目', items: researchProjects },
]

export const projects: Array<ProjectItemType> = projectSections.flatMap((section) => section.items)

// Hobbies & Volunteer
export const activitiesHeadLine = "Hobbies & Volunteer"
export const activitiesIntro = "Personal interests and community contributions."

export const activities: Array<ActivityItemType> = [
  {
    name: 'Cube Solving',
    description:
      'Restore 2nd to 6th order Rubik\'s Cube, as well as Pyramid Cube, Mirror Cube, and Dodecahedron Cube',
    date: '2018-Present',
    location: 'Yunnan',
    link: 'https://space.bilibili.com/199555828',
  },
  {
    name: 'Running',
    description:
      'Participating in local running events and promoting fitness in the community.',
    date: 'Always',
    location: 'Yunnan&Shanghai',
    link: 'https://example.com/running',
  },
  {
    name: 'Watching Movies',
    description:
      'Enjoying and analyzing films from various genres and directors.',
    date: 'Always',
    location: 'Yunnan&Shanghai',
    link: 'https://tv-ten-chi.vercel.app/',
  },
]
