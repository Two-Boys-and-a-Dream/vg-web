import { waitFor } from '@testing-library/react'
import { Navbar } from '../'
import { renderWithClient } from '../../../utils/testUtils'

describe('<Navbar />', () => {
    it('renders', async () => {
        const { getByTestId } = renderWithClient(<Navbar />)

        await waitFor(() => {
            expect(getByTestId('navbar')).toBeDefined()
        })
    })
})
