
// education 
export type EducationItemType = {
    school: string
    major: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
  
  
  export const educationList: Array<EducationItemType> = [
    {
      school: 'Tongji University',
      major: 'artificial intelligence',
      logo: 'college',
      start: '2023',
      end: 'now'
    },
    {
      school: 'Baoshan Tianli Senior High School',
      major: 'Study',
      logo: 'coffee',
      start: '2020',
      end: '2023'
    },
    {
      school: 'Mangshui Middle School',
      major: 'Study',
      logo: 'bank',
      start: '2018',
      end: '2020'
    },
  ]