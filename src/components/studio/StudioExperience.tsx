"use client"

import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Github, Home, X } from 'lucide-react'

import { activities, awards, projectSections, type ActivityItemType, type ProjectItemType } from '@/config/projects'

type StudioItem = {
  id: string
  title: string
  description: string
  icon?: string
  tags: string[]
  github?: string
  website?: string
  links: Array<{ href: string; label: string }>
  weight?: 'hero' | 'normal' | 'small'
}

type StudioSection = {
  id: string
  navLabel: string
  eyebrow: string
  title: string
  intro: string
  items: StudioItem[]
}

function normalizeHref(href: string) {
  return /^https?:\/\//.test(href) ? href : `https://${href}`
}

function projectToItem(project: ProjectItemType, weight: StudioItem['weight'] = 'normal'): StudioItem {
  return {
    id: project.name.en,
    title: project.name.en,
    description: project.description.en,
    icon: project.icon,
    tags: project.tags.slice(0, 4).map((tag) => tag.en),
    github: project.link.href,
    website: project.website,
    links: project.extraLinks?.map((link) => ({ href: link.href, label: link.label.en })) ?? [],
    weight,
  }
}

function activityToItem(activity: ActivityItemType, weight: StudioItem['weight'] = 'normal'): StudioItem {
  return {
    id: activity.name.en,
    title: activity.name.en,
    description: activity.description.en,
    tags: [activity.date.en, activity.location.en].filter(Boolean),
    website: activity.website,
    links: activity.link ? [{ href: activity.link.href, label: activity.link.label?.en ?? 'View' }] : [],
    weight,
  }
}

function getSection(title: string) {
  const section = projectSections.find((item) => item.title.en === title)
  return section?.items ?? []
}

function buildStudioSections(): StudioSection[] {
  const research = getSection('Research & Projects')
  const coursework = getSection('Course Projects')
  const web = getSection('Web Development')
  const replica = getSection('Replica & Hobby Builds')

  return [
    {
      id: 'honors',
      navLabel: '01 Honors',
      eyebrow: '01 / CREDENTIALS',
      title: 'Honors & Copyrights',
      intro: 'Formal proof of academic competitions, scholarships, and software authorship.',
      items: awards.slice(0, 10).map((item, index) => activityToItem(item, index < 2 ? 'hero' : 'small')),
    },
    {
      id: 'research',
      navLabel: '02 Research',
      eyebrow: '02 / RESEARCH SYSTEMS',
      title: 'Research Projects',
      intro: 'Traffic intelligence, world models, VLM evaluation, and deployable research prototypes.',
      items: research.map((item, index) => projectToItem(item, index < 3 ? 'hero' : 'normal')),
    },
    {
      id: 'coursework',
      navLabel: '03 Coursework',
      eyebrow: '03 / ENGINEERING COURSEWORK',
      title: 'Course Projects',
      intro: 'Embedded systems, vision tracking, RISC-V, distributed computing, and hardware-facing work.',
      items: coursework.map((item, index) => projectToItem(item, index === 0 ? 'hero' : 'normal')),
    },
    {
      id: 'web',
      navLabel: '04 Web',
      eyebrow: '04 / PRODUCT SURFACE',
      title: 'Web Development & Builds',
      intro: 'Public-facing products, personal tools, experimental agents, replicas, and useful interfaces.',
      items: [...web, ...replica].map((item, index) => projectToItem(item, index < 3 ? 'hero' : 'normal')),
    },
    {
      id: 'interests',
      navLabel: '05 Interests',
      eyebrow: '05 / PERSONAL SIGNALS',
      title: 'Interests',
      intro: 'A short trace of the non-project side: speedcubing, running, and film notes.',
      items: activities.map((item) => activityToItem(item, 'small')),
    },
  ]
}

function WorkNode({
  item,
  active,
  selected,
  onEnter,
  onLeave,
  onSelect,
}: {
  item: StudioItem
  active: boolean
  selected: boolean
  onEnter: (element: HTMLElement) => void
  onLeave: () => void
  onSelect: () => void
}) {
  const open = active || selected

  return (
    <div className="studio-node-slot">
      <article
        tabIndex={0}
        className={`studio-node studio-node-${item.weight ?? 'normal'} ${open ? 'is-open' : ''} ${selected ? 'is-selected' : ''}`}
        onMouseEnter={(event) => onEnter(event.currentTarget)}
        onMouseLeave={onLeave}
        onFocus={(event) => onEnter(event.currentTarget)}
        onBlur={onLeave}
        onClick={onSelect}
      >
        <div className="studio-node-orb">
          {item.icon ? (
            <Image src={item.icon} alt="" width={64} height={64} className="studio-node-logo" />
          ) : (
            <span className="studio-node-initial">{item.title.slice(0, 1)}</span>
          )}
        </div>
        <div className="studio-node-card">
          <div className="studio-card-head">
            <div>
              <p className="studio-card-kicker">{item.tags[0] ?? 'Project'}</p>
              <h3>{item.title}</h3>
            </div>
            {selected && <span className="studio-pin">Pinned</span>}
          </div>
          <p className="studio-card-desc">{item.description}</p>
          <div className="studio-preview">
            <span>{item.title}</span>
          </div>
          <div className="studio-actions">
            {item.github && (
              <Link href={normalizeHref(item.github)} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()}>
                <Github size={14} />
                GitHub
              </Link>
            )}
            {item.website && (
              <Link href={normalizeHref(item.website)} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()}>
                <ArrowUpRight size={14} />
                Site
              </Link>
            )}
            {item.links.slice(0, 2).map((link) => (
              <Link key={link.href} href={normalizeHref(link.href)} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()}>
                <ArrowUpRight size={14} />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}

export default function StudioExperience() {
  const sections = useMemo(() => buildStudioSections(), [])
  const [activeId, setActiveId] = useState<string | null>(null)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [cursor, setCursor] = useState({ x: 0, y: 0, tx: 0, ty: 0, hot: false, ready: false })

  useEffect(() => {
    function onMove(event: MouseEvent) {
      setCursor((current) => {
        const x = current.hot ? current.tx * 0.36 + event.clientX * 0.64 : event.clientX
        const y = current.hot ? current.ty * 0.36 + event.clientY * 0.64 : event.clientY
        return { ...current, x, y, ready: true }
      })
    }

    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  function bindNode(item: StudioItem) {
    return {
      active: activeId === item.id,
      selected: selectedId === item.id,
      onEnter: (element: HTMLElement) => {
        const rect = element.getBoundingClientRect()
        setActiveId(item.id)
        setCursor((current) => ({
          ...current,
          tx: rect.left + rect.width / 2,
          ty: rect.top + rect.height / 2,
          hot: true,
        }))
      },
      onLeave: () => {
        setActiveId(null)
        setCursor((current) => ({ ...current, hot: false }))
      },
      onSelect: () => setSelectedId((current) => (current === item.id ? null : item.id)),
    }
  }

  return (
    <div className="studio-root">
      <div
        className={`studio-cursor ${cursor.ready ? 'is-ready' : ''} ${cursor.hot ? 'is-hot' : ''}`}
        style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }}
      >
        <span />
      </div>
      <div className="studio-backdrop" />
      <header className="studio-header">
        <Link href="/" className="studio-home">
          <Home size={16} />
          Academic Home
        </Link>
        <nav>
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`}>{section.navLabel}</a>
          ))}
        </nav>
      </header>

      <main>
        <section className="studio-hero">
          <p className="studio-eyebrow">YAOSHEN YU / PERSONAL PRODUCT ARCHIVE</p>
          <h1>Mirror Studio</h1>
          <p>
            A darker companion to the academic homepage, collecting research systems,
            AI products, software copyrights, course engineering, and smaller experiments
            into a single product archive.
          </p>
          <div className="studio-legend">
            <span>Research systems</span>
            <span>AI products</span>
            <span>Software copyrights</span>
          </div>
        </section>

        {sections.map((section) => (
          <section id={section.id} key={section.id} className="studio-section">
            <div className="studio-section-copy">
              <p>{section.eyebrow}</p>
              <h2>{section.title}</h2>
              <span>{section.intro}</span>
            </div>
            <div className="studio-field">
              {section.items.map((item) => (
                <WorkNode key={item.id} item={item} {...bindNode(item)} />
              ))}
            </div>
          </section>
        ))}
      </main>

      {selectedId && (
        <button className="studio-clear" type="button" onClick={() => setSelectedId(null)}>
          <X size={16} />
          Clear pinned card
        </button>
      )}
    </div>
  )
}
