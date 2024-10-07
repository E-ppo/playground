import { itemTypes } from '@/components/labelItemList/types'
import { KeyOfIcon } from '@/types/svgIconTypes'

export const skillList = [
  'JavaScript',
  'TypeScript',
  'React',
  'React-Native',
  'Next.js',
  'SCSS',
  'Styled-Components',
] as const

export const workExperience: itemTypes[] = [
  {
    icon: 'workBag',
    contents: {
      title: 'Junior Front Developer',
      description: 'Oct 2022 - Present',
    },
    leftText: '2 years',
  },
] as const

export const education: itemTypes[] = [
  {
    icon: 'graduationCap',
    contents: {
      title: 'Hanghae 99 (React.js Course) / Sparta Coding Club',
      description: '2022.05 ~ 2022.08',
    },
  },
  {
    icon: 'graduationCap',
    contents: {
      title:
        'Professional JAVA/JSP Web Solution Development Course for Employment / ITBank ',
      description: '2014.08 ~ 2014.12',
    },
  },
  {
    icon: 'graduationCap',
    contents: {
      title:
        'Sangmyung University, College of Software, Department of Digital Media (Seoul, South Korea)',
      description: '2007.03 ~ 2013.08',
    },
  },
  {
    icon: 'graduationCap',
    contents: {
      title: 'Pocheon Il High School',
      description: '2004.03 ~ 2007.02',
    },
  },
] as const
