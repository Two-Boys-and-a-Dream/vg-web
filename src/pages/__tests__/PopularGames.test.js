import { render } from '@testing-library/react'
import { PopularGames } from '../PopularGames'

describe('<PopularGames />', () => {
    it('renders', () => {
        const { getByText } = render(<PopularGames />)

        expect(getByText('Popular Games Page')).toBeDefined()
    })
})
