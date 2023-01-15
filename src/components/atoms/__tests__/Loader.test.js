import { render } from '@testing-library/react'
import { Loader } from '../Loader/Loader'

describe('<Loader />', () => {
    it('renders', () => {
        const root = render(<Loader />)

        expect(root).toBeDefined()
    })
})
