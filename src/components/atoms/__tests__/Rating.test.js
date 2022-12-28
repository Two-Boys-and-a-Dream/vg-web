import { render } from '@testing-library/react'
import { Rating } from '../Rating'

describe('<Rating />', () => {
    it('renders', () => {
        const { getByText } = render(<Rating />)
        expect(getByText('0')).toBeDefined()
    })
})
