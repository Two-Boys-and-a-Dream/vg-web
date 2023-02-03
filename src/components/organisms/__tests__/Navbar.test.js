import { waitFor } from '@testing-library/react'
import { Navbar } from '../'
import { FAKE_NEWS } from '../../../data/dummy-data'
import { renderWithClient } from '../../../utils/testUtils'
import axios from 'axios'
import { BrowserRouter } from 'react-router-dom'

beforeEach(() => {
    axios.get.mockResolvedValue({ data: FAKE_NEWS })
})

describe('<Navbar />', () => {
    it('renders', async () => {
        const { getByTestId, getByText } = renderWithClient(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        )

        await waitFor(() => {
            expect(getByTestId('navbar')).toBeDefined()
            expect(getByText('article one')).toBeDefined()
        })
    })
})
