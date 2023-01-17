import { render } from '@testing-library/react'
import { Rating } from '../Rating/Rating'

describe('<Rating />', () => {
    it('renders', () => {
        const { getByText } = render(<Rating />)
        expect(getByText('?')).toBeDefined()
    })
})
