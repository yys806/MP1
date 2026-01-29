import { awards, awardsHeadLine } from "@/config/projects"
import { Card } from "@/components/shared/Card"
import { Section } from "@/components/layout/Section"
import { useLanguage } from "@/app/providers"
import { selectText } from "@/lib/i18n"

export function Awards() {
  const { locale } = useLanguage()
  return (
    <Section title={selectText(awardsHeadLine, locale)}>
      <div className="grid grid-cols-1 gap-4">
        {awards.map((award, index) => {
          const rawHref = award.link?.href ?? (award as any).href
          const resolvedHref = rawHref
            ? /^https?:\/\//.test(rawHref)
              ? rawHref
              : `https://${rawHref}`
            : undefined
          const Component: any = resolvedHref ? 'a' : 'div'

          return (
            <Card
              as={Component}
              href={resolvedHref}
              target={resolvedHref ? '_blank' : undefined}
              rel={resolvedHref ? 'noopener noreferrer' : undefined}
              key={award.name.en ?? index}
              className={
                resolvedHref
                  ? 'group cursor-pointer transition no-underline'
                  : undefined
              }
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{selectText(award.name, locale)}</h3>
                  <span className="text-sm text-muted-foreground">
                    {selectText(award.date, locale)}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {selectText(award.description, locale)}
                </p>
                {resolvedHref && (
                  <span className="text-sm text-primary hover:underline inline-flex items-center gap-1">
                    {selectText(award.link?.label ?? { en: 'View detail', zh: '查看详情' }, locale)}
                    <span aria-hidden>→</span>
                  </span>
                )}
              </div>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}
