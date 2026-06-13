import Image from 'next/image'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { ArrowUpRight, BookOpen, Briefcase, FileText, Github, Mail, MapPin, Sparkles } from 'lucide-react'

import avatarImage from '@/images/avatar.jpg'
import {
  aboutParagraphs,
  chineseName,
  email,
  githubUsername,
  headline,
  introduction,
  name,
  projectSections,
} from '@/config/infoConfig'
import { awards } from '@/config/projects'
import { educationList } from '@/config/education'
import { careerList } from '@/config/career'
import { getAllBlogs, type BlogType } from '@/lib/blogs'
import { Locale, defaultLocale, selectText } from '@/lib/i18n'

function normalizeHref(href: string) {
  return /^https?:\/\//.test(href) || href.startsWith('mailto:')
    ? href
    : `https://${href}`
}

function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-zinc-200/90 py-8">
      <h2 className="text-[22px] font-semibold tracking-tight text-zinc-950">
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  )
}

function TextLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={normalizeHref(href)}
      target={href.startsWith('mailto:') ? undefined : '_blank'}
      rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
      className="inline-flex items-center gap-1 font-medium text-[#276b7d] underline-offset-4 hover:underline"
    >
      {children}
      {!href.startsWith('mailto:') && <ArrowUpRight size={14} />}
    </Link>
  )
}

function CompactProjectList({
  locale,
  limit = 5,
}: {
  locale: Locale
  limit?: number
}) {
  const projects = projectSections.flatMap((section) =>
    section.title.en === 'Research & Projects' ? section.items.slice(0, limit) : [],
  )

  return (
    <ul className="space-y-4">
      {projects.map((project) => (
        <li key={project.name.en}>
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="font-semibold text-zinc-950">
              <TextLink href={project.link.href}>{selectText(project.name, locale)}</TextLink>
            </h3>
            <div className="flex flex-wrap gap-2 text-xs text-zinc-500">
              {project.tags.slice(0, 3).map((tag) => (
                <span key={tag.en}>{selectText(tag, locale)}</span>
              ))}
            </div>
          </div>
          <p className="mt-1 text-[15px] leading-7 text-zinc-600">
            {selectText(project.description, locale)}
          </p>
        </li>
      ))}
    </ul>
  )
}

function BlogList({ blogs }: { blogs: BlogType[] }) {
  return (
    <ul className="space-y-3">
      {blogs.map((blog) => (
        <li key={blog.slug} className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <Link
            href={`/blogs/${blog.slug}`}
            className="font-medium text-zinc-950 underline-offset-4 hover:text-[#276b7d] hover:underline"
          >
            {blog.title}
          </Link>
          <span className="text-sm text-zinc-500">{blog.date}</span>
        </li>
      ))}
    </ul>
  )
}

export default async function Home() {
  const blogs = (await getAllBlogs()).slice(0, 5)
  const cookieLocale = cookies().get('lang')?.value as Locale | undefined
  const locale: Locale = cookieLocale === 'zh' ? 'zh' : defaultLocale
  const selectedAwards = awards.slice(0, 8)

  return (
    <div className="min-h-screen cursor-auto bg-[#fbfaf6] text-zinc-900">
      <div className="mx-auto max-w-6xl px-5 pb-20 pt-8 sm:px-8 lg:px-10">
        <header className="mb-10 flex items-center justify-between border-b border-zinc-200 pb-5 text-[13px]">
          <Link href="/" className="font-semibold tracking-tight text-zinc-800">
            {name}
          </Link>
          <nav className="flex items-center gap-5 text-zinc-500">
            <Link href="#research" className="hover:text-zinc-950">Research</Link>
            <Link href="#projects" className="hover:text-zinc-950">Projects</Link>
            <Link href="#notes" className="hover:text-zinc-950">Blog</Link>
            <Link href="/studio" className="font-semibold text-[#276b7d] hover:text-zinc-950">Studio</Link>
          </nav>
        </header>

        <div className="grid gap-12 lg:grid-cols-[250px_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-10 lg:self-start">
            <Image
              src={avatarImage}
              alt={name}
              width={176}
              height={176}
              priority
              className="h-44 w-44 rounded-full border border-zinc-200 bg-white object-cover p-1 shadow-sm"
            />
            <h1 className="mt-6 text-2xl font-semibold tracking-tight text-zinc-950">
              {name}
            </h1>
            <p className="mt-1 text-base font-medium text-zinc-500">{chineseName}</p>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              {selectText(headline, locale)}
            </p>

            <div className="mt-6 space-y-3 text-sm text-zinc-600">
              <p className="flex items-center gap-2"><MapPin size={16} /> Shanghai / Yunnan</p>
              <p className="flex items-center gap-2"><Briefcase size={16} /> Tongji University</p>
              <p className="flex items-center gap-2"><Mail size={16} /> <TextLink href={`mailto:${email}`}>Email</TextLink></p>
              <p className="flex items-center gap-2"><Github size={16} /> <TextLink href={`github.com/${githubUsername}`}>GitHub</TextLink></p>
            </div>

            <div className="mt-7 flex flex-col gap-2">
              <Link
                href="/studio"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-700"
              >
                <Sparkles size={16} />
                Personal Studio
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:border-zinc-300 hover:bg-zinc-50"
              >
                <FileText size={16} />
                Full Project Index
              </Link>
            </div>
          </aside>

          <main className="min-w-0">
            <section className="pb-8">
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-950">
                Current
              </h2>
              <p className="mt-4 text-lg italic leading-8 text-zinc-600">
                I am building AI systems that connect research prototypes with usable products.
              </p>
            </section>

            <Section id="bio" title="Short Bio">
              <div className="space-y-5 text-[16px] leading-8 text-zinc-600">
                <p>{selectText(introduction, locale)}</p>
                {aboutParagraphs.map((paragraph) => (
                  <p key={paragraph.en}>{selectText(paragraph, locale)}</p>
                ))}
              </div>
            </Section>

            <Section id="education" title="Education">
              <ul className="list-disc space-y-3 pl-6 text-[16px] leading-7 text-zinc-600">
                {educationList.map((item) => (
                  <li key={item.school.en}>
                    <span className="font-medium text-zinc-950">
                      {selectText(item.school, locale)}
                    </span>
                    {': '}
                    {selectText(item.major, locale)} - {item.start} - {item.end}
                  </li>
                ))}
              </ul>
            </Section>

            <Section id="research" title="Research and Experience">
              <ul className="space-y-4">
                {careerList.map((item) => (
                  <li key={item.company.en}>
                    <div className="font-semibold text-zinc-950">
                      {selectText(item.company, locale)}
                    </div>
                    <div className="text-sm text-zinc-500">
                      {selectText(item.title, locale)} - {item.start} - {item.end}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <CompactProjectList locale={locale} />
              </div>
            </Section>

            <Section id="projects" title="Selected Projects">
              <div className="grid gap-5 md:grid-cols-2">
                {projectSections.slice(1).map((section) => (
                  <div key={section.title.en} className="rounded-lg border border-zinc-200 bg-white/70 p-5 shadow-sm shadow-zinc-200/40">
                    <h3 className="font-semibold text-zinc-950">
                      {selectText(section.title, locale)}
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-600">
                      {section.items.slice(0, 4).map((project) => (
                        <li key={project.name.en}>
                          <TextLink href={project.link.href}>{selectText(project.name, locale)}</TextLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="honors" title="Honors, Awards, and Software Copyrights">
              <ul className="list-disc space-y-3 pl-6 text-[15px] leading-7 text-zinc-600">
                {selectedAwards.map((award) => (
                  <li key={award.name.en}>
                    <span className="font-medium text-zinc-950">
                      {selectText(award.name, locale)}
                    </span>
                    {': '}
                    {selectText(award.description, locale)} - {selectText(award.date, locale)}
                    {award.link && (
                      <>
                        {' '}
                        <TextLink href={award.link.href}>{selectText(award.link.label ?? { en: 'View', zh: '查看' }, locale)}</TextLink>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </Section>

            <Section id="notes" title="Notes">
              <div className="flex items-center gap-2 text-zinc-600">
                <BookOpen size={18} />
                <p>Recent blog posts and technical notes.</p>
              </div>
              <div className="mt-4">
                <BlogList blogs={blogs} />
              </div>
            </Section>
          </main>
        </div>
      </div>
    </div>
  )
}
