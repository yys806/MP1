import { awards, awardsHeadLine } from '@/config/projects'
import { Card } from '@/components/shared/Card'
import { Section } from '@/components/layout/Section'
import { useLanguage } from '@/app/providers'
import { selectText } from '@/lib/i18n'

export function Awards() {
  const { locale } = useLanguage()
  return (
    <Section title={selectText(awardsHeadLine, locale)}>
      <div className="grid grid-cols-1 gap-4">
        {awards.map((award, index) => (
          <Card key={award.name.en ?? index}>
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
              {award.link && (
                <a
                  href={award.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  {locale === 'en' ? 'Learn more →' : '了解更多 →'}
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
