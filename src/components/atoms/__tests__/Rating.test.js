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
})
