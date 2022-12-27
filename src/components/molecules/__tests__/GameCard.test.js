import { render } from '@testing-library/react'
import { GameCard } from '../GameCard'

describe('<GameCard />', () => {
    it('renders', () => {
        const { getByTestId } = render(<GameCard />)
        expect(getByTestId('game-card')).toBeDefined()
    })
})
