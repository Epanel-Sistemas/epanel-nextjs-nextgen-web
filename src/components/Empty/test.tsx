import { render, screen } from '~/utils/test-utils'

import Empty from '.'

const props = {
  title: 'A simple title',
  description: 'A simple description'
}

describe('<Empty />', () => {
  it('should render correctly', () => {
    const { container } = render(<Empty {...props} />)

    expect(
      screen.getByRole('heading', { name: /a simple title/i })
    ).toBeDefined()

    expect(screen.getByText(/a simple description/i)).toBeDefined()

    expect(container.parentElement).toMatchSnapshot()
  })
})
