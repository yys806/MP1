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
      company: { en: 'Research-Progressive Guided Multi-Agent Diffusion for Robust Traffic Generation', zh: '研究-用于鲁棒交通生成的渐进式引导多智能体扩散模型' },
      title: { en: 'Student', zh: '学生' },
      logo: 'college',
      start: '2025.11',
      end: 'Present'
    },
    {
      company: { en: 'Tongji University Quality Control Office', zh: '同济大学质管办' },
      title: { en: 'Developer', zh: '开发者' },
      logo: 'college',
      start: '2025.07',
      end: 'Present'
    }
  ]
