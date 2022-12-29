import { waitFor } from '@testing-library/react'
import { renderWithClient } from '../../utils/testUtils'
import { Home } from '../Home'
import axios from 'axios'

beforeEach(() => {
    axios.get.mockResolvedValue({ data: [] })
})

describe('<Home />', () => {
    it('renders', async () => {
        const { getByText } = renderWithClient(<Home />)

        await waitFor(() => {
            expect(getByText('New Releases')).toBeDefined()
        })
    })
})
