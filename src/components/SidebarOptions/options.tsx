import { Wine, LineChart } from 'lucide-react'

export type NavigationOptionProps = {
  key: string
  icon?: JSX.Element
  title: string
  href?: string
  subOptions?: NavigationOptionProps[]
}

export const sidebarOptions: NavigationOptionProps[] = [
  {
    key: 'dashboard',
    icon: <LineChart />,
    title: 'Dashboard',
    href: '/'
  },
  {
    key: 'products',
    icon: <Wine />,
    title: 'Products',
    href: '/products'
  }
]
