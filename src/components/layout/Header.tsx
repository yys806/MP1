'use client'

import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Popover } from '@headlessui/react'
import clsx from 'clsx'
import { ChevronDownIcon, XIcon } from 'lucide-react'

import { useLanguage } from '@/app/providers'
import { Container } from '@/components/layout/Container'
import { GithubRepo } from '@/components/shared/GithubRepo'
import { LanguageToggle } from '@/components/shared/LanguageToggle'
import { ThemeToggle } from '@/components/shared/ThemeToggle'
import { name } from '@/config/infoConfig'
import { navItems } from '@/config/siteConfig'
import { selectText } from '@/lib/i18n'

function Brand() {
  return (
    <Link href="/" aria-label="Home" className="flex items-center gap-2">
      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
        <Image
          src="/shenkey.png"
          alt=""
          width={28}
          height={28}
          className="h-7 w-7 rounded-full object-cover"
          priority
        />
      </span>
      <span className="hidden text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:inline">
        {name}
      </span>
    </Link>
  )
}

function NavItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  const isActive = usePathname() === href

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'block px-2 py-1 text-sm transition',
          isActive
            ? 'font-semibold text-[#276f7a]'
            : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white',
        )}
      >
        {children}
      </Link>
    </li>
  )
}

function DesktopNavigation() {
  const { locale } = useLanguage()

  return (
    <nav className="hidden md:block">
      <ul className="flex items-center gap-3">
        {navItems.map((item, index) => (
          <Fragment key={item.href}>
            {index > 0 && <li className="h-3 w-px bg-zinc-300 dark:bg-zinc-700" />}
            <NavItem href={item.href}>{selectText(item.name, locale)}</NavItem>
          </Fragment>
        ))}
      </ul>
    </nav>
  )
}

function MobileNavigation() {
  const { locale } = useLanguage()

  return (
    <Popover className="md:hidden">
      <Popover.Button className="flex items-center rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
        Menu
        <ChevronDownIcon className="ml-2 h-3 w-3" />
      </Popover.Button>
      <Popover.Panel className="fixed inset-x-4 top-8 z-50 rounded-2xl border border-zinc-200 bg-white p-6 shadow-xl dark:border-zinc-700 dark:bg-zinc-900">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold">{name}</span>
          <Popover.Button aria-label="Close menu" className="p-1">
            <XIcon className="h-5 w-5 text-zinc-500" />
          </Popover.Button>
        </div>
        <nav className="mt-5">
          <ul className="divide-y divide-zinc-100 dark:divide-zinc-800">
            {navItems.map((item) => (
              <li key={item.href}>
                <Popover.Button
                  as={Link}
                  href={item.href}
                  className="block py-3 text-sm text-zinc-700 dark:text-zinc-200"
                >
                  {selectText(item.name, locale)}
                </Popover.Button>
              </li>
            ))}
          </ul>
        </nav>
      </Popover.Panel>
    </Popover>
  )
}

export function Header() {
  return (
    <header className="relative z-50 flex-none py-6">
      <Container>
        <div className="flex items-center justify-between gap-4 border-b border-zinc-200 pb-5 dark:border-zinc-800">
          <Brand />
          <div className="flex items-center gap-4">
            <DesktopNavigation />
            <MobileNavigation />
            <div className="flex items-center gap-2">
              <LanguageToggle />
              <ThemeToggle />
              <GithubRepo />
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}
