import Link from "next/link"
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
        {awards.map((award, index) => (
          <Card
            key={award.name.en ?? index}
            className={award.link ? "group cursor-pointer transition" : undefined}
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
              {award.link && (
                <Link
                  href={award.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                >
                  {selectText(award.link.label ?? { en: "View detail", zh: "²é¿´ÏêÇé" }, locale)}
                  <span aria-hidden>¡ú</span>
                </Link>
              )}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
