import { render } from '@testing-library/react'
import { Home } from '../Home'

describe('<Home />', () => {
    it('renders', () => {
        const root = render(<Home />)
        expect(root).toBeDefined()
    })
})
