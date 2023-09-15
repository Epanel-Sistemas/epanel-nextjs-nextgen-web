import { Button } from '~/components/ui/button'

import { useCart } from '~/hooks/use-cart'

export type PaymentInfoProps = {
  number: string
  flag: string | null
  img: string | null
  purchaseDate: string
}

export type GameItemProps = {
  id: string
  title: string
  price: string
}

const GameItem = ({ id, title, price }: GameItemProps) => {
  const { isInCart, removeFromCart } = useCart()

  return (
    <div data-cy="game-item" className="flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <span>{title}</span>
        <div>
          <span>{price}</span>
          {isInCart(id) && (
            <Button variant="link" onClick={() => removeFromCart(id)}>
              Remove
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default GameItem
