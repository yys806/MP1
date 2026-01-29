export * from './projects'
export * from './education'
export * from './career'

import { LocalizedString } from '@/lib/i18n'

// personal info
export const name = 'Leo Yu'
export const headline: LocalizedString = { en: 'Student at Tongji University.', zh: '同济大学学生' }
export const introduction: LocalizedString =
  { en: "How are you doing today! My name is Yu Yaoshen. I'm from Yunnan and a student of Tongji University. I’ve been studying AI at TJU since 2023.", zh: "你好！我是禹尧珅，来自云南，就读于同济大学，自 2023 年起学习人工智能。" }
export const email = '3492675568@qq.com'
export const githubUsername = 'yys806'

// about page
export const aboutMeHeadline: LocalizedString = { en: 'Who Are You and Why Should I Care?', zh: '我是谁，为什么值得关注？' }
export const aboutParagraphs: LocalizedString[] = [
  {
    en: "My name is Yu Yaoshen, an undergraduate student majoring in Artificial Intelligence at Tongji University. My current GPA is 4.78/5, equivalent to 92.77 points out of 100. My major ranking is 1/47, which puts me in the top 2.13%.",
    zh: "我叫禹尧珅，同济大学人工智能专业本科生，绩点 4.78/5（92.77/100），专业排名 1/47，前2.13%。",
  },
  {
    en: 'Currently I am studying courses such as Embedded systems, data structures, PCB design, machine learning, deep learning, Python, computer vision. I have a solid foundation in embedded systems and programming.',
    zh: '目前学习嵌入式系统、数据结构、PCB 设计、机器学习、深度学习、Python、计算机视觉等课程，具备扎实的嵌入式与编程基础。',
  },
  {
    en: "I started this blog to share the insights I learn every day. Most blogs focus on education in Artificial Intelligence and general computer science, while others share the important lessons I've learned.",
    zh: '我写博客分享日常学习心得，主要围绕人工智能与计算机科学，也记录重要的经验与思考。',
  },
]

// blog
export const blogHeadLine: LocalizedString = { en: "What I've thinking about.", zh: '我在思考些什么' }
export const blogIntro: LocalizedString =
  { en: "I've written something about AI, programming and life.", zh: '记录我在 AI、编程与生活方面的所思所想。' }

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
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'wechat',
]
