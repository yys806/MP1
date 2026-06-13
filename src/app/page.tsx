import Image from 'next/image'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { ArrowUpRight, Github, Mail, MapPin } from 'lucide-react'

import avatarImage from '@/images/avatar.jpg'
import {
  aboutParagraphs,
  blogIntro,
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

function ExternalLink({
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
      className="inline-flex items-center gap-1 text-[#276f7a] underline-offset-4 hover:underline"
    >
      {children}
      {!href.startsWith('mailto:') && <ArrowUpRight size={13} />}
    </Link>
  )
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
    <section id={id} className="scroll-mt-24 border-t border-zinc-200 py-8">
      <h2 className="text-[22px] font-semibold tracking-tight text-zinc-950">
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  )
}

function ArchiveLine({
  year,
  title,
  meta,
  href,
}: {
  year?: string
  title: string
  meta?: string
  href?: string
}) {
  const titleNode = href ? (
    <ExternalLink href={href}>{title}</ExternalLink>
  ) : (
    <span className="font-medium text-zinc-950">{title}</span>
  )

  return (
    <li className="grid gap-1 border-b border-zinc-100 py-3 text-[15px] leading-7 sm:grid-cols-[92px_minmax(0,1fr)]">
      <span className="text-sm text-zinc-500">{year}</span>
      <div>
        {titleNode}
        {meta && <p className="text-zinc-600">{meta}</p>}
      </div>
    </li>
  )
}

function BlogArchive({ blogs }: { blogs: BlogType[] }) {
  return (
    <ul>
      {blogs.map((blog) => (
        <ArchiveLine
          key={blog.slug}
          year={blog.date}
          title={blog.title}
          href={`/blogs/${blog.slug}`}
        />
      ))}
    </ul>
  )
}

export default async function Home() {
  const blogs = (await getAllBlogs()).slice(0, 5)
  const cookieLocale = cookies().get('lang')?.value as Locale | undefined
  const locale: Locale = cookieLocale === 'zh' ? 'zh' : defaultLocale

  const researchSection = projectSections.find((section) => section.title.en === 'Research & Projects')
  const otherProjectSections = projectSections.filter((section) => section.title.en !== 'Research & Projects')

  return (
    <div className="bg-[#fbfaf5] text-zinc-900">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-10 sm:px-8 lg:grid-cols-[270px_minmax(0,1fr)] lg:px-10">
        <aside className="lg:sticky lg:top-10 lg:self-start">
          <Image
            src={avatarImage}
            alt={name}
            width={210}
            height={210}
            priority
            className="h-48 w-48 rounded-full border border-zinc-200 bg-white object-cover p-1 shadow-sm"
          />
          <h1 className="mt-6 text-2xl font-semibold tracking-tight text-zinc-950">
            {name}
          </h1>
          <p className="mt-1 text-base text-zinc-500">{chineseName}</p>
          <p className="mt-4 text-sm leading-6 text-zinc-600">
            {selectText(headline, locale)}
          </p>

          <div className="mt-6 space-y-3 text-sm text-zinc-600">
            <p className="flex items-center gap-2">
              <MapPin size={15} />
              Shanghai / Yunnan
            </p>
            <p className="flex items-center gap-2">
              <Mail size={15} />
              <ExternalLink href={`mailto:${email}`}>Email</ExternalLink>
            </p>
            <p className="flex items-center gap-2">
              <Github size={15} />
              <ExternalLink href={`github.com/${githubUsername}`}>GitHub</ExternalLink>
            </p>
          </div>

          <nav className="mt-8 flex flex-col gap-2 border-t border-zinc-200 pt-5 text-sm font-medium text-zinc-600">
            <Link href="#about" className="hover:text-zinc-950">About</Link>
            <Link href="#research" className="hover:text-zinc-950">Research</Link>
            <Link href="#projects" className="hover:text-zinc-950">Projects</Link>
            <Link href="#awards" className="hover:text-zinc-950">Honors</Link>
            <Link href="#notes" className="hover:text-zinc-950">Notes</Link>
          </nav>
        </aside>

        <main className="min-w-0">
          <section id="about" className="pb-8">
            <p className="text-[15px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Academic Homepage
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950">
              About
            </h2>
            <div className="mt-5 space-y-5 text-[16px] leading-8 text-zinc-700">
              <p>{selectText(introduction, locale)}</p>
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph.en}>{selectText(paragraph, locale)}</p>
              ))}
            </div>
          </section>

          <Section id="education" title="Education">
            <ul>
              {educationList.map((item) => (
                <ArchiveLine
                  key={item.school.en}
                  year={`${item.start} - ${item.end}`}
                  title={selectText(item.school, locale)}
                  meta={selectText(item.major, locale)}
                />
              ))}
            </ul>
          </Section>

          <Section id="research" title="Research and Experience">
            <ul>
              {careerList.map((item) => (
                <ArchiveLine
                  key={item.company.en}
                  year={`${item.start} - ${item.end}`}
                  title={selectText(item.company, locale)}
                  meta={selectText(item.title, locale)}
                />
              ))}
              {researchSection?.items.map((project) => (
                <ArchiveLine
                  key={project.name.en}
                  title={selectText(project.name, locale)}
                  meta={selectText(project.description, locale)}
                  href={project.link.href}
                />
              ))}
            </ul>
          </Section>

          <Section id="projects" title="Projects">
            <div className="space-y-8">
              {otherProjectSections.map((section) => (
                <div key={section.title.en}>
                  <h3 className="text-base font-semibold text-zinc-950">
                    {selectText(section.title, locale)}
                  </h3>
                  <ul className="mt-2">
                    {section.items.map((project) => (
                      <ArchiveLine
                        key={project.name.en}
                        title={selectText(project.name, locale)}
                        meta={selectText(project.description, locale)}
                        href={project.link.href}
                      />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          <Section id="awards" title="Honors, Awards, and Software Copyrights">
            <ul>
              {awards.map((award) => (
                <ArchiveLine
                  key={award.name.en}
                  year={selectText(award.date, locale)}
                  title={selectText(award.name, locale)}
                  meta={selectText(award.description, locale)}
                  href={award.link?.href}
                />
              ))}
            </ul>
          </Section>

          <Section id="notes" title="Notes">
            <p className="mb-2 text-[15px] leading-7 text-zinc-600">
              {selectText(blogIntro, locale)}
            </p>
            <BlogArchive blogs={blogs} />
          </Section>
        </main>
      </div>
    </div>
  )
}
