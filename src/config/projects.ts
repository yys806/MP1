// Types
export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  tags: string[]
}

export type ActivityItemType = {
  name: string
  description: string
  date: string
  location: string
  link?: string
}

// Awards
export const awardsHeadLine = "Awards & Honors"
export const awardsIntro = "Recognition for academic and professional achievements."

export const awards: Array<ActivityItemType> = [
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
    name: 'National College Student Mathematical Modeling Competition',
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

export const projects: Array<ProjectItemType> = [
  {
    name: 'Research and development of intelligent passenger flow sensing and optimized carriage allocation system for subway trains',
    description: 'Shanghai Municipal University Student Innovation and Entrepreneurship Project',
    link: { href: 'https://yys806.github.io/', label: 'GitHub Cards' },
    tags: ['Civil Engineering', 'Computer Vision', 'Raspberry Pi']
  },
  {
    name: 'Tongji University Quality Control Office Agent Development',
    description: 'An intelligent agent to assist the Quality Control Office in managing and analyzing quality data.',
    link: { href: 'https://www.coze.cn/s/b7SWRlmpPaE/', label: 'View Course' },
    tags: ['Workflow', 'Automation','Python', 'AI', 'Deepseek']
  },
  {
    name: 'Little Wang Robot Dog v1.0',
    description: 'A robotic dog designed for companionship and assistance.',
    link: { href: 'https://oshwhub.com/hanbing666/tian-ji-xiao-wang-wang-xing-xing-da-lao-zhuan-shu-ban', label: 'View Course' },
    tags: ['PCB Design', 'Welding','TianWen', 'AI', 'Servo']
  },
  {
    name: 'Xiao Zhi AI Chatbot',
    description: 'An AI chatbot designed for natural language understanding and conversation.',
    link: { href: 'https://github.com/78/xiaozhi-esp32', label: 'View Course' },
    tags: ['PCB Design', '3D Printing','MCP', 'Python', 'AI Chat', 'LLM']
  },
  {
    name: 'Text recognizer based on STM32G0 and infrared sensors',
    description: 'A project focused on developing a text recognition system using STM32G0 microcontroller and infrared sensors.',
    link: { href: 'https://git.tongji.edu.cn/cdpa/doc', label: 'View Course' },
    tags: ['Embedded Systems', 'STM32', 'Infrared Sensors', 'AI', 'Computer Vision']
  },
]

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
