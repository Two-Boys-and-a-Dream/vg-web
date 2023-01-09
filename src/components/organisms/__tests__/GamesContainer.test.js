import { waitFor } from '@testing-library/react'
import { GamesContainer } from '../GamesContainer'
import { FAKE_GAMES } from '../../../data/dummy-data'
import { renderWithClient } from '../../../utils/testUtils'
import axios from 'axios'

beforeEach(() => {
    axios.get.mockResolvedValue({ data: FAKE_GAMES })
})
describe('<GamesContainer />', () => {
    it('renders data when finished loading', async () => {
        const { getByText, queryByTestId } = renderWithClient(
            <GamesContainer />
        )

        // Loading at first
        expect(queryByTestId('loader')).toBeDefined()

        // Then renders game data, no loader in element tree
        await waitFor(() => {
            expect(getByText('Some Game')).toBeDefined()
            expect(queryByTestId('loader')).toBeNull()
        })
    })
})
