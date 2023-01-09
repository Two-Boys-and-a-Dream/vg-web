import axios from 'axios'

import { waitFor } from '@testing-library/react'
import { renderWithClient } from '../../utils/testUtils'
import { GamesPage } from '../GamesPage'

const fakeGame = {
    id: '1',
    name: 'Some Game',
    total_rating: 58,
    release_dates: [{ human: '12/22/22' }],
    cover: { image_id: 'testImg' },
    summary: 'long test summary',
}
beforeEach(() => {
    axios.get.mockResolvedValue({ data: [fakeGame] })
})

describe('<GamesPage/>', () => {
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
