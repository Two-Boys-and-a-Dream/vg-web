import { NewsContainer } from '../NewsContainer'
import { waitFor } from '@testing-library/react'
import { renderWithClient } from '../../../utils/testUtils'
import axios from 'axios'

const data = [
    {
        _id: '1',
        title: 'article one',
        link: 'somewhere.test.com',
        image: '//someUri',
    },
]

beforeEach(() => {
    axios.get.mockResolvedValue({ data })
})

describe('<NewsContainer />', () => {
    it('renders', async () => {
        const { getByText } = renderWithClient(<NewsContainer />)

        await waitFor(() => {
            expect(getByText('article one')).toBeDefined()
        })
    })
})
