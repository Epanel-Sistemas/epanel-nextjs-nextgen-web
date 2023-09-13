import { cn } from '~/utils'

type Props = {
  children: React.ReactNode
  className?: string
}

const Title = ({ children, className }: Props) => {
  return (
    <h1
      className={cn(
        'text-4xl font-bold leading-none tracking-tight',
        className
      )}
    >
      {children}
    </h1>
  )
}

export default Title
