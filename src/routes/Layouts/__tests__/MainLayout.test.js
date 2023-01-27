import { waitFor } from '@testing-library/react'
import axios from 'axios'
import { FAKE_NEWS } from '../../../data/dummy-data'
import { renderWithClient } from '../../../utils/testUtils'
import { MainLayout } from '../MainLayout/MainLayout'

beforeEach(() => {
    axios.get.mockResolvedValue({ data: FAKE_NEWS })
})

describe('<Layout />', () => {
    it('renders', async () => {
        const { getByText, getByTestId } = renderWithClient(<MainLayout />)

        await waitFor(() => {
            // Ensures navbar renders
            expect(getByTestId('navbar')).toBeDefined()
            expect(getByText('article one')).toBeDefined()
        })
    })
})
