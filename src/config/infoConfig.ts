export * from './projects'
export * from './education'
export * from './career'

import { LocalizedString } from '@/lib/i18n'

// personal info
export const name = 'Yaoshen Yu'
export const chineseName = '禹尧珅'
export const headline: LocalizedString = {
  en: 'AI undergraduate at Tongji University.',
  zh: '同济大学人工智能专业本科生',
}
export const introduction: LocalizedString = {
  en: 'My name is Yu Yaoshen. I am an undergraduate student majoring in Artificial Intelligence at Tongji University, working across AI research, traffic intelligence, embedded systems, and product-oriented web applications.',
  zh: '我是禹尧珅，同济大学人工智能专业本科生，关注 AI 研究、交通智能、嵌入式系统和产品化 Web 应用。',
}
export const email = '3492675568@qq.com'
export const githubUsername = 'yys806'

// about page
export const aboutMeHeadline: LocalizedString = {
  en: 'Building research prototypes and useful AI products.',
  zh: '构建研究原型和可用的 AI 产品',
}
export const aboutParagraphs: LocalizedString[] = [
  {
    en: 'My name is Yu Yaoshen, an undergraduate student majoring in Artificial Intelligence at Tongji University. My current GPA is 4.78/5, equivalent to 92.77 points out of 100. My major ranking is 1/47, which puts me in the top 2.13%.',
    zh: '我叫禹尧珅，是同济大学人工智能专业本科生。当前绩点 4.78/5，折合百分制 92.77，专业排名 1/47，位于前 2.13%。',
  },
  {
    en: 'Currently I am studying courses such as embedded systems, data structures, PCB design, machine learning, deep learning, Python, and computer vision. I have a solid foundation in embedded systems and programming.',
    zh: '目前学习嵌入式系统、数据结构、PCB 设计、机器学习、深度学习、Python、计算机视觉等课程，具备嵌入式系统与编程基础。',
  },
  {
    en: 'This site records my research code, internships, software copyrights, course projects, web products, and technical notes.',
    zh: '这个网站记录我的科研代码、实习项目、软件著作权、课程项目、网站产品和技术笔记。',
  },
]

// blog
export const blogHeadLine: LocalizedString = {
  en: 'Notes and writing.',
  zh: '笔记与写作',
}
export const blogIntro: LocalizedString = {
  en: 'Short notes about AI, programming, research, products, and life.',
  zh: '记录 AI、编程、科研、产品和生活中的思考。',
}

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Tiktok',
    icon: 'tiktok',
    href: 'https://www.douyin.com/user/self?from_tab_name=main',
  },
  {
    name: 'Bilibili',
    icon: 'bilibili',
    href: 'https://space.bilibili.com/505921205',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'googlegemini',
  'netlify',
  'steam',
  'android',
  'apple',
  'wechat',
]
