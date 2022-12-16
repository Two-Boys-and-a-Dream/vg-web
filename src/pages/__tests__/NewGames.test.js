import { render } from '@testing-library/react'
import { NewGames } from '../NewGames'

describe('<NewGames />', () => {
    it('renders', () => {
        const { getByText } = render(<NewGames />)

        expect(getByText('New Games Page')).toBeDefined()
    })
})
