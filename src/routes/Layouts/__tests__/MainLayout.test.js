import { waitFor } from '@testing-library/react'
import axios from 'axios'
import { FAKE_NEWS } from '../../../data/dummy-data'
import { renderWithClient } from '../../../utils/testUtils'
import { MainLayout } from '../MainLayout/MainLayout'
import { BrowserRouter, useLocation } from 'react-router-dom'

beforeEach(() => {
    axios.get.mockResolvedValue({ data: FAKE_NEWS })
})

describe('<MainLayout />', () => {
    it('renders hero image for / route', async () => {
        const { getByText, getByTestId } = renderWithClient(
            <BrowserRouter>
                <MainLayout />
            </BrowserRouter>
        )

        await waitFor(() => {
            // Ensures navbar renders
            expect(getByTestId('navbar')).toBeDefined()

            // And hero
            expect(getByText('Video Game')).toBeDefined()
            expect(getByText('Central')).toBeDefined()
        })
    })

    it('does not renders hero for non / routes', async () => {
        useLocation.mockReturnValue({ pathname: '/somewhere' })
        const { queryByText, getByTestId } = renderWithClient(
            <BrowserRouter>
                <MainLayout />
            </BrowserRouter>
        )

        await waitFor(() => {
            // Ensures navbar renders
            expect(getByTestId('navbar')).toBeDefined()

            // And hero doesn't
            expect(queryByText('Video Game')).toBeNull()
            expect(queryByText('Central')).toBeNull()
        })
    })
})
