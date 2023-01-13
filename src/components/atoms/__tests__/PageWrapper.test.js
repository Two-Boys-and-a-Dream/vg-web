import { PageWrapper } from '../PageWrapper/PageWrapper'
import { render } from '@testing-library/react'

describe('<PageWrapper />', () => {
    it('renders', () => {
        const root = render(<PageWrapper />)

        expect(root).toBeDefined()
    })
})
