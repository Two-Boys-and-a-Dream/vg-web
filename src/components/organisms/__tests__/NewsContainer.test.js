import { NewsContainer } from '../NewsContainer/NewsContainer'
import { waitFor } from '@testing-library/react'
import { renderWithClient } from '../../../utils/testUtils'
import axios from 'axios'
import { FAKE_NEWS } from '../../../data/dummy-data'

beforeEach(() => {
    axios.get.mockResolvedValue({ data: FAKE_NEWS })
})

describe('<NewsContainer />', () => {
    it('renders', async () => {
        const { getByText } = renderWithClient(<NewsContainer />)

        await waitFor(() => {
            expect(getByText('article one')).toBeDefined()
        })
    })
})
