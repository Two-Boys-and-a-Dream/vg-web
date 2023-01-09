import axios from 'axios'
import { waitFor } from '@testing-library/react'
import { renderWithClient } from '../../utils/testUtils'
import { GamesPage } from '../GamesPage'
import { FAKE_GAMES } from '../../data/dummy-data'

beforeEach(() => {
    axios.get.mockResolvedValue({ data: FAKE_GAMES })
})

describe('<GamesPage />', () => {
    it('renders defaults', async () => {
        const { getByText } = renderWithClient(<GamesPage />)

        await waitFor(() => {
            expect(getByText('Missing Page Title')).toBeDefined()
            expect(getByText('Some Game')).toBeDefined()
        })
    })
    it('renders custom title page', async () => {
        const { getByText } = renderWithClient(
            <GamesPage title="Upcoming Games" />
        )

        await waitFor(() => {
            expect(getByText('Upcoming Games')).toBeDefined()
            expect(getByText('Some Game')).toBeDefined()
        })
    })
})
