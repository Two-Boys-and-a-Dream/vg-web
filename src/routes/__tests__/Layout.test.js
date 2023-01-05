import { waitFor } from '@testing-library/react'
import { renderWithClient } from '../../utils/testUtils'
import { Layout } from '../Layout'

describe('<Layout />', () => {
    it('renders', async () => {
        const root = renderWithClient(<Layout />)

        await waitFor(() => {
            expect(root).toBeDefined()
        })
    })
})
