export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'Leo Yu'
export const headline = 'Student at Tongji University.'
export const introduction =
  "How are you doing today! My name is Yu Yaoshen. I'm from Yunnan and a student of Tongji University. I’ve been studying AI at TJU since 2023."
export const email = '3492675568@qq.com'
export const githubUsername = 'yys806'

// about page
export const aboutMeHeadline = 'Who Are You and Why Should I Care?'
export const aboutParagraphs = [
  "My name is Yu Yaoshen, an undergraduate student majoring in Artificial Intelligence at Tongji University. My current GPA is 4.73/5, equivalent to 92.34 points out of 100. My major ranking is 2/47, which puts me in the top 4.26%.",
  'Currently I am studying courses such as Embedded systems, data structures, PCB design, machine learning, deep learning, Python, computer vision. I have a solid foundation in embedded systems and programming.',
  "I started this blog to share the insights I learn every day. Most blogs focus on education in Artificial Intelligence and general computer science, while others share the important lessons I've learned.",
]

// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro =
  "I've written something about AI, programming and life."

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
