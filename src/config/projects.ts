import { LocalizedString } from '@/lib/i18n'

export type ProjectItemType = {
  name: LocalizedString
  description: LocalizedString
  link: { href: string; label: LocalizedString }
  tags: LocalizedString[]
  website?: string
  icon?: string
}

export type ActivityItemType = {
  name: LocalizedString
  description: LocalizedString
  date: LocalizedString
  location: LocalizedString
  link?: string
}

export type ProjectSectionType = {
  title: LocalizedString
  items: Array<ProjectItemType>
}

// Awards
export const awardsHeadLine: LocalizedString = { en: 'Awards & Honors', zh: '奖项与荣誉' }
export const awardsIntro: LocalizedString = { en: 'Recognition for academic and professional achievements.', zh: '学术与专业成就所获荣誉。' }

export const awards: Array<ActivityItemType> = [
  {
    name: { en: 'The 7th Global Campus Artificial Intelligence Algorithm Elite Competition in 2025', zh: '2025 第七届全球校园人工智能算法精英赛' },
    description: { en: 'National First Prize', zh: '全国一等奖' },
    date: { en: '2025.12', zh: '2025.12' },
    location: { en: 'Beijing', zh: '北京' },
  },
  {
    name: { en: '2025 National College Student Mathematical Modeling Competition', zh: '2025 全国大学生数学建模竞赛' },
    description: { en: 'Shanghai Second Prize', zh: '上海赛区二等奖' },
    date: { en: '2025', zh: '2025' },
    location: { en: 'Shanghai', zh: '上海' },
  },
  {
    name: { en: '2024 National Scholarship', zh: '2024 国家奖学金' },
    description: { en: '¥10000 prize', zh: '奖金 10000 元' },
    date: { en: '2024', zh: '2024' },
    location: { en: 'Shanghai', zh: '上海' },
  },
  {
    name: { en: 'The 6th Huashu Cup Mathematical Modeling Competition', zh: '第六届华数杯数学建模竞赛' },
    description: { en: 'National Third Prize', zh: '全国三等奖' },
    date: { en: '2025.8.10', zh: '2025.8.10' },
    location: { en: 'Shanghai', zh: '上海' },
  },
  {
    name: { en: 'The 9th IC-Innovation Challenge - JYD Cup', zh: '第九届 IC-Innovation 挑战赛 - JYD 杯' },
    description: { en: 'East China Division Third Prize', zh: '华东赛区三等奖' },
    date: { en: '2025.7.31', zh: '2025.7.31' },
    location: { en: 'Shanghai', zh: '上海' },
  },
  {
    name: { en: 'MothorCup Mathematical Modeling Competition', zh: '摩托杯数学建模竞赛' },
    description: { en: 'Shanghai Third Prize', zh: '上海赛区三等奖' },
    date: { en: '2025.4.18', zh: '2025.4.18' },
    location: { en: 'Shanghai', zh: '上海' },
  },
  {
    name: { en: 'Mathematical Contest In Modeling', zh: '美国大学生数学建模竞赛 (MCM/ICM)' },
    description: { en: 'Successful Participant', zh: 'Successful Participant' },
    date: { en: '2025.1.24', zh: '2025.1.24' },
    location: { en: 'Shanghai', zh: '上海' },
  },
  {
    name: { en: '2024 National College English Translation Competition', zh: '2024 全国大学生英语翻译大赛' },
    description: { en: 'Third Prize', zh: '三等奖' },
    date: { en: '2024.11.1', zh: '2024.11.1' },
    location: { en: 'Shanghai', zh: '上海' },
  },
  {
    name: { en: '2024 National College Student Mathematical Modeling Competition', zh: '2024 全国大学生数学建模竞赛' },
    description: { en: 'Shanghai Third Prize', zh: '上海赛区三等奖' },
    date: { en: '2024.9.5', zh: '2024.9.5' },
    location: { en: 'Shanghai', zh: '上海' },
  },
  {
    name: { en: 'Tongji University Freshman Structure Competition', zh: '同济大学新生结构设计大赛' },
    description: { en: 'Third Prize', zh: '三等奖' },
    date: { en: '2023.12.5', zh: '2023.12.5' },
    location: { en: 'Tongji, Shanghai', zh: '同济·上海' },
  },
]

// Research & Projects
export const projectHeadLine: LocalizedString = { en: 'Research & Projects', zh: '科研与项目' }
export const projectIntro: LocalizedString = { en: "Academic research and technical projects I've worked on.", zh: '我参与的科研与技术项目。' }

const courseworkProjects: Array<ProjectItemType> = [
  {
    name: { en: 'e203-htmi-fpga', zh: 'e203-htmi-fpga 字符终端系统' },
    description: { en: 'Character terminal system on Hummingbird e203', zh: '基于蜂鸟 e203 的字符终端系统' },
    link: { href: 'github.com/yys806/e203-htmi-fpga.git', label: { en: 'View', zh: '查看' } },
    tags: [
      { en: 'Embedded Systems', zh: '嵌入式' },
      { en: 'e203', zh: 'e203' },
      { en: 'Hummingbird', zh: 'Hummingbird' },
    ],
    icon: '/images/icon/github.png',
  },
  {
    name: { en: 'e203-RISC-V-counter', zh: 'e203 RISC-V 计数器' },
    description: { en: 'RISC-V counter on Hummingbird e203', zh: '基于蜂鸟 e203 的 RISC-V 计数器' },
    link: { href: 'github.com/yys806/e203-RISCV-counter.git', label: { en: 'View', zh: '查看' } },
    tags: [
      { en: 'Embedded Systems', zh: '嵌入式' },
      { en: 'e203', zh: 'e203' },
      { en: 'Hummingbird', zh: 'Hummingbird' },
      { en: 'counter', zh: '计数器' },
    ],
    icon: '/images/icon/github.png',
  },
  {
    name: { en: 'Distributed parallel computing system', zh: '分布式并行计算系统' },
    description: { en: '2025 Algorithm Major Project', zh: '2025 算法课程大作业' },
    link: { href: 'github.com/yys806/shen-kai.git', label: { en: 'View', zh: '查看' } },
    tags: [
      { en: 'Algorithm', zh: '算法' },
      { en: 'OpenMp', zh: 'OpenMP' },
      { en: 'SSE', zh: 'SSE' },
      { en: 'Distributed', zh: '分布式' },
    ],
    icon: '/images/icon/github.png',
  },
  {
    name: { en: 'Text recognizer based on STM32G0 and infrared sensors', zh: '基于 STM32G0 与红外传感器的文字识别器' },
    description: { en: 'Text recognition using STM32G0 microcontroller and infrared sensors.', zh: '使用 STM32G0 微控制器与红外传感器的文字识别系统。' },
    link: {
      href: 'pub-fae7c18af59f40679cbe76ee23a170c8.r2.dev/%E9%A1%B9%E7%9B%AE/2352396-%E7%A6%B9%E5%B0%A7%E7%8F%85-%E6%96%87%E5%AD%97%E8%AF%86%E5%88%AB%E5%99%A8-%E8%AE%BE%E8%AE%A1%E6%8A%A5%E5%91%8A.pdf',
      label: { en: 'View', zh: '查看' },
    },
    tags: [
      { en: 'Embedded Systems', zh: '嵌入式' },
      { en: 'STM32', zh: 'STM32' },
      { en: 'Infrared Sensors', zh: '红外传感' },
      { en: 'AI', zh: 'AI' },
      { en: 'Computer Vision', zh: '计算机视觉' },
    ],
    icon: '/images/icon/shen.png',
  },
]

const webDevProjects: Array<ProjectItemType> = [
  {
    name: { en: 'MathSnap', zh: 'MathSnap' },
    description: { en: 'Website for paper reading, LaTeX converting, and image processing.', zh: '用于论文阅读、LaTeX 转换及图像处理的网站。' },
    link: { href: 'github.com/yys806/research-helper', label: { en: 'View', zh: '查看' } },
    website: '2352396.de5.net',
    tags: [
      { en: 'Gemini', zh: 'Gemini' },
      { en: 'Netlify', zh: 'Netlify' },
      { en: 'LaTeX', zh: 'LaTeX' },
      { en: 'Paper', zh: '论文' },
      { en: 'OCR', zh: 'OCR' },
      { en: 'Siliconing', zh: 'Siliconing' },
    ],
    icon: '/images/icon/shen.png',
  },
  {
    name: { en: 'Shen’s tools', zh: 'Shen 的工具箱' },
    description: { en: 'A site collecting all tools I use for study and life.', zh: '汇总学习与生活常用工具的网站。' },
    link: { href: 'github.com/yys806/AI-tool', label: { en: 'View', zh: '查看' } },
    website: 'riscv.de5.net',
    tags: [
      { en: 'Gemini', zh: 'Gemini' },
      { en: 'Netlify', zh: 'Netlify' },
      { en: 'Latex', zh: 'LaTeX' },
      { en: 'QR code', zh: '二维码' },
      { en: 'Converter', zh: '换算器' },
    ],
    icon: '/images/icon/shen.png',
  },
  {
    name: { en: 'Cyber AI Divination', zh: '赛博 AI 占卜' },
    description: { en: 'Cyber AI Fortune-telling Website', zh: '赛博风格 AI 算卦网站' },
    link: { href: 'github.com/yys806/Divination', label: { en: 'View', zh: '查看' } },
    website: 'fpga.de5.net',
    tags: [
      { en: 'Gemini', zh: 'Gemini' },
      { en: 'Netlify', zh: 'Netlify' },
      { en: 'Gossip', zh: '八卦' },
      { en: 'Xiao Liu Ren', zh: '小六壬' },
      { en: 'Plum Blossom', zh: '梅花易数' },
    ],
    icon: '/images/icon/shen.png',
  },
  {
    name: { en: 'Nexus Terminal', zh: 'Nexus 终端' },
    description: { en: 'A Jarvis-like web terminal inspired by Ironman.', zh: '受钢铁侠启发的 Jarvis 风格网页终端。' },
    link: { href: 'github.com/yys806/shenge-gpt', label: { en: 'View', zh: '查看' } },
    website: 'shen-play.de5.net',
    tags: [
      { en: 'Gemini', zh: 'Gemini' },
      { en: 'Netlify', zh: 'Netlify' },
      { en: 'Playwright', zh: 'Playwright' },
      { en: 'Jarvis-like', zh: 'Jarvis 风格' },
    ],
    icon: '/images/icon/shen.png',
  },
  {
    name: { en: 'Homepage', zh: '个人主页' },
    description: { en: 'My recent plan and some of my websites', zh: '近期计划与个人网站集合' },
    link: { href: 'github.com/yys806/Homepage.git', label: { en: 'View', zh: '查看' } },
    website: 'shen806.dpdns.org',
    tags: [
      { en: 'Gemini', zh: 'Gemini' },
      { en: 'Netlify', zh: 'Netlify' },
      { en: 'Supbase', zh: 'Supabase' },
      { en: 'Full-stack', zh: '全栈' },
    ],
    icon: '/images/icon/homepage.jpg',
  },
  {
    name: { en: 'Fortress', zh: 'Fortress 数据守护' },
    description: { en: 'A tool to restore local important data', zh: '恢复本地重要数据的工具' },
    link: { href: 'github.com/yys806/Fortress.git', label: { en: 'View', zh: '查看' } },
    website: 'shentv.dpdns.org',
    tags: [
      { en: 'Gemini', zh: 'Gemini' },
      { en: 'Storage', zh: '存储' },
    ],
    icon: '/images/icon/Fortress.png',
  },
  {
    name: { en: '428806QR-tool', zh: '428806 二维码工具' },
    description: { en: 'A tool to generate unique QR codes', zh: '生成唯一二维码的工具' },
    link: { href: 'github.com/yys806/QR-tool.git', label: { en: 'View', zh: '查看' } },
    website: '428806.xyz',
    tags: [
      { en: 'Gemini', zh: 'Gemini' },
      { en: 'Netlify', zh: 'Netlify' },
      { en: 'Adsense', zh: 'Adsense' },
      { en: 'Full-stack', zh: '全栈' },
    ],
    icon: '/images/icon/QR-tool.png',
  },
  {
    name: { en: 'Image removal tool', zh: '图片去黑边工具' },
    description: { en: 'A tool to remove black borders from images', zh: '去除图片黑边的小工具' },
    link: { href: 'github.com/yys806/Picture-process.git', label: { en: 'View', zh: '查看' } },
    website: 'shen-photo.de5.net',
    tags: [
      { en: 'Gemini', zh: 'Gemini' },
      { en: 'Photo-processor', zh: '图像处理' },
    ],
    icon: '/images/icon/shen.png',
  },
]

const researchProjects: Array<ProjectItemType> = [
  {
    name: { en: 'Tongji University Quality Control Office Agent Development', zh: '同济大学质控办智能体开发' },
    description: { en: 'Agent to help Quality Control Office manage and analyze quality data.', zh: '帮助质控办管理与分析质量数据的智能体。' },
    link: { href: 'agent.tongji.edu.cn/product/llm/chat/d4ksjeglmqe6v2jvltfg', label: { en: 'View', zh: '查看' } },
    tags: [
      { en: 'Workflow', zh: '工作流' },
      { en: 'Automation', zh: '自动化' },
      { en: 'Python', zh: 'Python' },
      { en: 'AI', zh: 'AI' },
      { en: 'Deepseek', zh: 'Deepseek' },
    ],
    icon: '/images/icon/tongji.jpg',
  },
  {
    name: { en: 'Intelligent passenger flow sensing & optimized carriage allocation for subway', zh: '地铁智能客流感知与车厢优化分配系统' },
    description: { en: 'Shanghai Municipal University Student Innovation and Entrepreneurship Project', zh: '上海市大学生创新创业项目' },
    link: {
      href: 'pub-fae7c18af59f40679cbe76ee23a170c8.r2.dev/%E8%8E%B7%E5%A5%96/2024-2025/SITP%E7%BB%93%E9%A2%98%E8%AF%81%E4%B9%A6.pdf',
      label: { en: 'View', zh: '查看' },
    },
    tags: [
      { en: 'Civil Engineering', zh: '土木工程' },
      { en: 'Computer Vision', zh: '计算机视觉' },
      { en: 'Raspberry Pi', zh: '树莓派' },
    ],
    icon: '/images/icon/shen.png',
  },
  {
    name: { en: 'Little Wang Robot Dog v1.0', zh: '小汪机器人狗 v1.0' },
    description: { en: 'Robotic dog for companionship and assistance.', zh: '用于陪伴与辅助的机器人狗。' },
    link: {
      href: 'oshwhub.com/hanbing666/tian-ji-xiao-wang-wang-xing-xing-da-lao-zhuan-shu-ban',
      label: { en: 'View', zh: '查看' },
    },
    tags: [
      { en: 'PCB Design', zh: 'PCB 设计' },
      { en: 'Welding', zh: '焊接' },
      { en: 'TianWen', zh: '天问' },
      { en: 'AI', zh: 'AI' },
      { en: 'Servo', zh: '舵机' },
    ],
    icon: '/images/icon/shen.png',
  },
  {
    name: { en: 'Xiao Zhi AI Chatbot', zh: '小智 AI 聊天机器人' },
    description: { en: 'AI chatbot for natural language conversation.', zh: '用于自然语言对话的 AI 聊天机器人。' },
    link: { href: 'github.com/78/xiaozhi-esp32', label: { en: 'View', zh: '查看' } },
    tags: [
      { en: 'PCB Design', zh: 'PCB 设计' },
      { en: '3D Printing', zh: '3D 打印' },
      { en: 'MCP', zh: 'MCP' },
      { en: 'Python', zh: 'Python' },
      { en: 'AI Chat', zh: 'AI 聊天' },
      { en: 'LLM', zh: '大模型' },
    ],
    icon: '/images/icon/github.png',
  },
]

export const projectSections: Array<ProjectSectionType> = [
  { title: { en: 'Course Projects', zh: '校内大作业' }, items: courseworkProjects },
  { title: { en: 'Web Development', zh: '网站开发' }, items: webDevProjects },
  { title: { en: 'Research & Projects', zh: '科研研究与项目' }, items: researchProjects },
]

export const projects: Array<ProjectItemType> = projectSections.flatMap((section) => section.items)

// Hobbies & Volunteer
export const activitiesHeadLine: LocalizedString = { en: 'Hobbies & Volunteer', zh: '兴趣与志愿' }
export const activitiesIntro: LocalizedString = { en: 'Personal interests and community contributions.', zh: '个人兴趣与社区贡献。' }

export const activities: Array<ActivityItemType> = [
  {
    name: { en: 'Cube Solving', zh: '魔方速拧' },
    description:
      { en: "Restore 2nd to 6th order Rubik's Cube, as well as Pyramid Cube, Mirror Cube, and Dodecahedron Cube", zh: '复原二到六阶、金字塔、镜面、五魔方等多种魔方' },
    date: { en: '2018-Present', zh: '2018 至今' },
    location: { en: 'Yunnan', zh: '云南' },
    link: 'https://space.bilibili.com/199555828',
  },
  {
    name: { en: 'Running', zh: '跑步' },
    description:
      { en: 'Participating in local running events and promoting fitness in the community.', zh: '参加本地跑步赛事，推广健身。' },
    date: { en: 'Always', zh: '一直在跑' },
    location: { en: 'Yunnan & Shanghai', zh: '云南 & 上海' },
    link: 'https://example.com/running',
  },
  {
    name: { en: 'Watching Movies', zh: '观影' },
    description:
      { en: 'Enjoying and analyzing films from various genres and directors.', zh: '欣赏并分析各类型影片与导演作品。' },
    date: { en: 'Always', zh: '一直在看' },
    location: { en: 'Yunnan & Shanghai', zh: '云南 & 上海' },
    link: 'https://tv-ten-chi.vercel.app/',
  },
]
