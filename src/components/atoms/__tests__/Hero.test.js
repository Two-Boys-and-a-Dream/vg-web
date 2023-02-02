import { render } from '@testing-library/react'
import { Hero } from '../Hero/Hero'

describe('<Hero />', () => {
    it('renders', () => {
        const { getByText } = render(<Hero />)

        expect(getByText('Video Game')).toBeDefined()
    })
})
