// career
import { LocalizedString } from '@/lib/i18n'

export type CareerItemType = {
    company: LocalizedString
    title: LocalizedString
    image?: string
    logo: string
    start: string
    end: string
  }
  
export const careerList: Array<CareerItemType> = [
    {
      company: { en: 'Tongji University Quality Control Office', zh: '同济大学质管办' },
      title: { en: 'Developer', zh: '开发者' },
      logo: 'college',
      start: '2025.07',
      end: 'Present'
    }
  ]
