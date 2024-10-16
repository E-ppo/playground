import logo from '@/public/img/logo.webp'

export const blogOverViewInfo = {
  img: logo,
  title: 'Eppo의 테크 블로그에 오신 것을 환영합니다!',
  description: `프론트엔드 개발의 다양한 영역을 카테고리별로 정리하고 있습니다. \n개발 과정에서 얻은 인사이트와 실용적인 팁을 공유하며, 함께 성장하는 공간을 만들어가고 있습니다.`,
  button: {
    text: 'New Post',
    onClick: () => console.log(111),
  },
} as const

export const blogNavListItem = [
  { title: 'React.js', router: '/about' },
  { title: 'Next.js', router: '/about' },
  { title: 'React-Native', router: '/portfolio' },
  { title: 'ㅇ_ㅇㅋ', router: '/blog' },
] as const
