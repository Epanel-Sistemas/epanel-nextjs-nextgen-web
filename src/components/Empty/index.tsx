import Link from 'next/link'

import { Button } from '~/components/ui/button'

export type EmptyProps = {
  title: string
  description: string
}

const Empty = ({ title, description }: EmptyProps) => (
  <div>
    <h2>{title}</h2>
    <span>{description}</span>
    <Link href="/" passHref>
      <Button>Go back to store</Button>
    </Link>
  </div>
)

export default Empty
