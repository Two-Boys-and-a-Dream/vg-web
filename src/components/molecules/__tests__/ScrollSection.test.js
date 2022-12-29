import { render } from '@testing-library/react'
import { ScrollSection } from '../ScrollSection'

describe('<ScrollSection />', () => {
    it('renders', () => {
        const root = render(<ScrollSection />)

        expect(root).toBeDefined()
    })
    it('renders optional link', () => {
        const { getByText } = render(
            <ScrollSection linkPath="somewhere" linkText="Take Me" />
        )

        expect(getByText('Take Me')).toBeDefined()
    })
})
