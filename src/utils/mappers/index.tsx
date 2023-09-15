import formatPrice from '~/utils/format-price'

import { GameProps } from '~/types/api'

export const cartMapper = (games: GameProps[] | undefined) => {
  return games
    ? games.map((game) => ({
        id: game.id,
        title: game.name,
        price: formatPrice(game.price)
      }))
    : []
}
