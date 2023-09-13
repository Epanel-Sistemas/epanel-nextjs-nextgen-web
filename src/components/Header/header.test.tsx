/**
 * @jest-environment jsdom
 */
import { fireEvent, cleanup, render } from '@testing-library/react'

import Header from './index'

describe('Components > Header', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render header link', async () => {
    const { findByTestId } = render(<Header />)

    const link = await findByTestId('epanel-web')
    expect(link).toBeDefined()
    expect(link.textContent).toBe('Epanel Web')
  })

  it('should clicked start as not defined', async () => {
    const { queryByTestId } = render(<Header />)

    const clicked = queryByTestId('clicked')
    expect(clicked).toBeNull()
  })

  it("should clicked be defined if it's clicked", async () => {
    const { findByTestId } = render(<Header />)

    const button = await findByTestId('click-button')
    fireEvent.click(button)

    const clicked = await findByTestId('clicked')
    expect(clicked).toBeDefined()
  })
})
