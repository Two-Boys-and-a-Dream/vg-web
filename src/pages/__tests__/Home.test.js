import { waitFor } from '@testing-library/react'
import { renderWithClient } from '../../utils/testUtils'
import { Home } from '../Home'
import axios from 'axios'
import { FAKE_GAMES } from '../../data/dummy-data'

beforeEach(() => {
    axios.get.mockResolvedValue({ data: FAKE_GAMES })
})

describe('<Home />', () => {
    it('renders', async () => {
        const { getByText, queryAllByText } = renderWithClient(<Home />)

        await waitFor(() => {
            expect(getByText('New Releases')).toBeDefined()

            // Expect these same games rendered 3 times
            // Once for each: Popular, New, Upcoming sections on Home Screen
            expect(queryAllByText('Some Game').length).toEqual(3)
            expect(queryAllByText('Some Other Game').length).toEqual(3)
        })
    })
})
