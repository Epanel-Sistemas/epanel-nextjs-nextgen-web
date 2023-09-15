import Link from 'next/link'
import CartItem from '~/components/CartItem'

import { Button } from '~/components/ui/button'
import Empty from '~/components/Empty'

import { useCart } from '~/hooks/use-cart'

export type CartListProps = {
  hasButton?: boolean
}

const CartList = ({ hasButton = false }: CartListProps) => {
  const { items, total } = useCart()

  return (
    <div className="flex flex-col gap-2" data-cy="cart-list">
      {items.length ? (
        <>
          <div className="flex flex-col gap-2">
            {items.map((item) => (
              <CartItem key={item.title} {...item} />
            ))}
          </div>

          <div>
            {!hasButton && <span>Total:</span>}
            <span>{total}</span>

            {hasButton && (
              <Link href="/cart" passHref>
                <Button>Buy it now</Button>
              </Link>
            )}
          </div>
        </>
      ) : (
        <Empty
          title="Your cart is empty"
          description="Go back to the store and explore great games and offers."
        />
      )}
    </div>
  )
}

export default CartList
