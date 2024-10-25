import { KeyOfIcon } from '@/types/svgIconTypes'

type itemTypes = {
  icon?: KeyOfIcon
  contents: { title: string; description: string }
  leftText?: string
}

interface ItemProps {
  icon?: React.ReactNode
  contents: {
    title: string
    description?: string
  }
  leftText?: string
}

interface TagProps {
  text: string
  color?: string
}
