import { render } from '@testing-library/react'
import { App } from '../App'

describe('<App />', () => {
    it('renders', () => {
        const root = render(<App />)

        expect(root).toBeDefined()
    })
})
