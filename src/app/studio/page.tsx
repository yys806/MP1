import { type Metadata } from 'next'

import StudioExperience from '@/components/studio/StudioExperience'

export const metadata: Metadata = {
  title: 'Studio',
  description: 'Personal product archive and interactive portfolio for Yaoshen Yu.',
}

export default function StudioPage() {
  return <StudioExperience />
}
