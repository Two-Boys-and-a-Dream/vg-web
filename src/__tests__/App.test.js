import { render, waitFor } from '@testing-library/react'
import axios from 'axios'
import { App } from '../App'
import { FAKE_NEWS } from '../data/dummy-data'

const originalNodeEnv = process.env.NODE_ENV

// Set NODE_ENV to 'development' for these tests,
// required due to setting basename on router programmatically
beforeEach(() => {
    process.env.NODE_ENV = 'development'
    axios.get.mockResolvedValue({ data: FAKE_NEWS })
})

afterAll(() => {
    process.env.NODE_ENV = originalNodeEnv
})

describe('<App />', () => {
    it('renders', async () => {
        const { getByText } = render(<App />)
        await waitFor(() => {
            expect(getByText('article one')).toBeDefined()
        })
    })
})
