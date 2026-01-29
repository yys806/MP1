import { SimpleIcon } from "react-icon-cloud"

// Minimal local subset to avoid network fetch + 404 issues.
// Only include slugs used in `techIcons` config.
export const simpleIconsSubset: Record<string, SimpleIcon> = {
  typescript: { title: "TypeScript", slug: "typescript", hex: "3178c6", source: "https://www.typescriptlang.org/" },
  javascript: { title: "JavaScript", slug: "javascript", hex: "f7df1e", source: "https://developer.mozilla.org/docs/Web/JavaScript" },
  supabase: { title: "Supabase", slug: "supabase", hex: "3ecf8e", source: "https://supabase.com/" },
  cloudflare: { title: "Cloudflare", slug: "cloudflare", hex: "f38020", source: "https://www.cloudflare.com/" },
  java: { title: "Java", slug: "java", hex: "007396", source: "https://www.oracle.com/java/" },
  oracle: { title: "Oracle", slug: "oracle", hex: "f80000", source: "https://www.oracle.com" },
  mysql: { title: "MySQL", slug: "mysql", hex: "4479a1", source: "https://www.mysql.com/" },
  react: { title: "React", slug: "react", hex: "61dafb", source: "https://react.dev/" },
  nodedotjs: { title: "Node.js", slug: "nodedotjs", hex: "539e43", source: "https://nodejs.org/" },
  nextdotjs: { title: "Next.js", slug: "nextdotjs", hex: "000000", source: "https://nextjs.org/" },
  prisma: { title: "Prisma", slug: "prisma", hex: "2d3748", source: "https://www.prisma.io/" },
  postgresql: { title: "PostgreSQL", slug: "postgresql", hex: "4169e1", source: "https://www.postgresql.org/" },
  nginx: { title: "Nginx", slug: "nginx", hex: "009639", source: "https://nginx.org/" },
  vercel: { title: "Vercel", slug: "vercel", hex: "000000", source: "https://vercel.com/" },
  docker: { title: "Docker", slug: "docker", hex: "2496ed", source: "https://www.docker.com/" },
  git: { title: "Git", slug: "git", hex: "f05032", source: "https://git-scm.com/" },
  github: { title: "GitHub", slug: "github", hex: "181717", source: "https://github.com/" },
  visualstudiocode: { title: "Visual Studio Code", slug: "visualstudiocode", hex: "007acc", source: "https://code.visualstudio.com/" },
  androidstudio: { title: "Android Studio", slug: "androidstudio", hex: "3ddc84", source: "https://developer.android.com/studio" },
  ios: { title: "iOS", slug: "ios", hex: "000000", source: "https://www.apple.com/ios/" },
  apple: { title: "Apple", slug: "apple", hex: "000000", source: "https://www.apple.com/" },
  wechat: { title: "WeChat", slug: "wechat", hex: "07c160", source: "https://www.wechat.com/" },
}

