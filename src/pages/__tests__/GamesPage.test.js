// import { renderWithClient } from '../../utils/testUtils'
// // import { waitFor } from '@testing-library/react'
// import { GamesPage } from '../'
import axios from 'axios'

import { waitFor } from '@testing-library/react'
import { renderWithClient } from '../../utils/testUtils'
import { GamesPage } from '../GamesPage'
// import { GameCard } from '../../components'

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

    // it('renders new games page', () => {
    //     const { getByText } = renderWithClient(<GamesPage title="New Games" />)
    //     expect(getByText('New Games')).toBeDefined()
    // })
    // it('renders popular games page', () => {
    //     const { getByText } = renderWithClient(
    //         <GamesPage title="Popular Games" />
    //     )
    //     expect(getByText('Popular Games')).toBeDefined()
    // })

    //     it('renders New Releases page', async () => {
    //         const { getByText } = renderWithClient(
    //             <GamesPage title="New Releases" />
    //         )

    //         await waitFor(() => {
    //             expect(getByText('New Releases')).toBeDefined()
    //         })
    //     })
    //     it('renders Upcoming Games page', async () => {
    //         const { getByText } = renderWithClient(
    //             <GamesPage title="Upcoming Games" />
    //         )

    //         await waitFor(() => {
    //             expect(getByText('Upcoming Games')).toBeDefined()
    //         })
    //     })
    //     it('renders Popular Games page', async () => {
    //         const { getByText } = renderWithClient(
    //             <GamesPage title="Popular Games" />
    //         )

    //         await waitFor(() => {
    //             expect(getByText('Popular Games')).toBeDefined()
    //         })
    //     })
})
