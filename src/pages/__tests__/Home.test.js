import { render } from '@testing-library/react'
import { Home } from '../Home'

describe('<Home />', () => {
    it('renders', () => {
        const { getByText } = render(<Home />)
        expect(getByText('Home Page')).toBeDefined()
    })
})
