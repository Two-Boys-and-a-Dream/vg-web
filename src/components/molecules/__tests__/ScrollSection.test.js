import { render } from '@testing-library/react'
import { ScrollSection } from '../ScrollSection/ScrollSection'

describe('<ScrollSection />', () => {
    it('renders', () => {
        const root = render(<ScrollSection />)

        expect(root).toBeDefined()
    })
})
