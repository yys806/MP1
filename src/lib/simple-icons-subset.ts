import { SimpleIcon } from "react-icon-cloud"

// Minimal local subset to avoid network fetch + 404 issues.
// Only include slugs used in `techIcons` config.
export const simpleIconsSubset: Record<string, SimpleIcon> = {
  typescript: { title: "TypeScript", slug: "typescript", hex: "3178c6" },
  javascript: { title: "JavaScript", slug: "javascript", hex: "f7df1e" },
  supabase: { title: "Supabase", slug: "supabase", hex: "3ecf8e" },
  cloudflare: { title: "Cloudflare", slug: "cloudflare", hex: "f38020" },
  java: { title: "Java", slug: "java", hex: "007396" },
  oracle: { title: "Oracle", slug: "oracle", hex: "f80000" },
  mysql: { title: "MySQL", slug: "mysql", hex: "4479a1" },
  react: { title: "React", slug: "react", hex: "61dafb" },
  nodedotjs: { title: "Node.js", slug: "nodedotjs", hex: "539e43" },
  nextdotjs: { title: "Next.js", slug: "nextdotjs", hex: "000000" },
  prisma: { title: "Prisma", slug: "prisma", hex: "2d3748" },
  postgresql: { title: "PostgreSQL", slug: "postgresql", hex: "4169e1" },
  nginx: { title: "Nginx", slug: "nginx", hex: "009639" },
  vercel: { title: "Vercel", slug: "vercel", hex: "000000" },
  docker: { title: "Docker", slug: "docker", hex: "2496ed" },
  git: { title: "Git", slug: "git", hex: "f05032" },
  github: { title: "GitHub", slug: "github", hex: "181717" },
  visualstudiocode: { title: "Visual Studio Code", slug: "visualstudiocode", hex: "007acc" },
  androidstudio: { title: "Android Studio", slug: "androidstudio", hex: "3ddc84" },
  ios: { title: "iOS", slug: "ios", hex: "000000" },
  apple: { title: "Apple", slug: "apple", hex: "000000" },
  wechat: { title: "WeChat", slug: "wechat", hex: "07c160" },
}
