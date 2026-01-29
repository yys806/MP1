
// education 
import { LocalizedString } from '@/lib/i18n'

export type EducationItemType = {
    school: LocalizedString
    major: LocalizedString
    image?: string
    logo: string
    start: string
    end: string
  }
  
  export const educationList: Array<EducationItemType> = [
    {
      school: { en: 'Tongji University', zh: '同济大学' },
      major: { en: 'Artificial Intelligence', zh: '人工智能' },
      logo: 'college',
      start: '2023',
      end: 'now'
    },
    {
      school: { en: 'Baoshan Tianli Senior High School', zh: '保山天立高级中学' },
      major: { en: 'Study', zh: '学习' },
      logo: 'coffee',
      start: '2020',
      end: '2023'
    },
    {
      school: { en: 'Mangshui Middle School', zh: '漭水中学' },
      major: { en: 'Study', zh: '学习' },
      logo: 'bank',
      start: '2018',
      end: '2020'
    },
  ]
