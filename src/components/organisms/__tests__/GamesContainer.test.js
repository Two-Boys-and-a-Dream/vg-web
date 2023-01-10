import { fireEvent, waitFor } from '@testing-library/react'
import { GamesContainer } from '../GamesContainer'
import { ADDITIONAL_FAKE_GAMES, FAKE_GAMES } from '../../../data/dummy-data'
import { renderWithClient } from '../../../utils/testUtils'
import axios from 'axios'

// Setup axios to return a set of games on first call, then
// a different set on second call.
beforeEach(() => {
    jest.resetAllMocks()
    axios.get
        .mockResolvedValueOnce({ data: FAKE_GAMES })
        .mockResolvedValueOnce({ data: ADDITIONAL_FAKE_GAMES })
})

afterAll(() => {
    jest.restoreAllMocks()
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
    it('fetches more on button click', async () => {
        const { getByText, queryByText, queryByTestId } = renderWithClient(
            <GamesContainer />
        )

        expect(queryByTestId('loader')).toBeDefined()

        await waitFor(() => {
            // Ensure the first set of game rendered, but not second
            expect(queryByText('Some Game')).toBeDefined()
            expect(queryByText('A Totally New Random Game')).toBeNull()
            expect(queryByTestId('loader')).toBeNull()
        })

        expect(queryByText('Loading more...')).toBeNull()
        expect(queryByText('Nothing more to load')).toBeNull()

        // click load more
        fireEvent.click(getByText('Load More'))

        await waitFor(() => {
            // make sure second set is rendered
            expect(getByText('A Totally New Random Game')).toBeDefined()
        })

        // check that button says nothing left to load
        expect(getByText('Nothing more to load')).toBeDefined()
    })
})
