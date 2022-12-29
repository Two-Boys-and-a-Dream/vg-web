import { render } from '@testing-library/react'
import { Layout } from '../Layout'

describe('<Layout />', () => {
    it('renders', () => {
        const root = render(<Layout />)

        expect(root).toBeDefined()
    })
})
