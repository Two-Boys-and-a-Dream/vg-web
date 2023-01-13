import { render } from '@testing-library/react'
import { GameCard } from '../GameCard/GameCard'

describe('<GameCard />', () => {
    it('renders', () => {
        const { getByTestId } = render(<GameCard imageId="123" />)
        expect(getByTestId('game-card')).toBeDefined()
    })
})
