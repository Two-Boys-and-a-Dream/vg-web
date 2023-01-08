import { render } from '@testing-library/react'
import { Rating } from '../Rating'

describe('<Rating />', () => {
    it('renders', () => {
        const { getByText } = render(<Rating />)
        expect(getByText('?')).toBeDefined()
    })
    it('rounds numbers to nearest whole', () => {
        const { getByText } = render(<Rating value={91.7832} />)

        expect(getByText(92)).toBeDefined()
    })
    it('renders with yellow background-color when value is greater than or equal to 50, but less than 75', () => {
        const { getByText } = render(<Rating value={70} />)
        expect(getByText(70)).toBeDefined()
    })
    it('renders with red background-color when value is less than 50', () => {
        const { getByText } = render(<Rating value={40} />)
        expect(getByText(40)).toBeDefined()
    })
})
