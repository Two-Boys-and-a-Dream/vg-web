import { ScrollCategory } from '../ScrollCategory/ScrollCategory'
import { waitFor } from '@testing-library/react'
import { renderWithClient } from '../../../utils/testUtils'
import axios from 'axios'
import { FAKE_GAMES } from '../../../data/dummy-data'

beforeEach(() => {
    axios.get.mockResolvedValue({ data: FAKE_GAMES })
})

describe('<ScrollCategory />', () => {
    it('renders', async () => {
        const { getByText } = renderWithClient(<ScrollCategory />)

        await waitFor(() => {
            expect(getByText('Some Game')).toBeDefined()
        })
    })

    it('shows newest release date when multiple exist', async () => {
        const { getByText } = renderWithClient(<ScrollCategory />)

        await waitFor(() => {
            expect(getByText('Release Date: 2/4/2023')).toBeDefined()
        })
    })
})
