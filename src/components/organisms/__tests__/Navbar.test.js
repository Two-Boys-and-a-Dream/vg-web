import { render } from '@testing-library/react'
import { Navbar } from '../'

describe('<Navbar />', () => {
    it('renders', () => {
        const { getByTestId } = render(<Navbar />)
        expect(getByTestId('navbar')).toBeDefined()
    })
})
