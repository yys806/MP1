// career
export type CareerItemType = {
    company: string
    title: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
export const careerList: Array<CareerItemType> = [
    {
      company: 'Tongji University Quality Control Office',
      title: 'Developer',
      logo: 'college',
      start: '2025.07',
      end: 'Present'
    }
  ]