import { render } from '@testing-library/react'
import { UpcomingGames } from '../UpcomingGames'
describe('<UpcomingGames />', () => {
    it('renders', () => {
        const { getByText } = render(<UpcomingGames />)

        expect(getByText('Upcoming Games Page')).toBeDefined()
    })
})
