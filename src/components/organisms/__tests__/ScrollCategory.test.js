import { ScrollCategory } from '../ScrollCategory'
import { waitFor } from '@testing-library/react'
import { renderWithClient } from '../../../utils/testUtils'
import axios from 'axios'

const data = [
    {
        id: '1',
        name: 'game one',
        release_dates: [{ human: '12/02/22' }, { human: '12/24/22' }],
    },
]

beforeEach(() => {
    axios.get.mockResolvedValue({ data })
})

describe('<ScrollCategory />', () => {
    it('renders', async () => {
        const { getByText } = renderWithClient(<ScrollCategory />)

        await waitFor(() => {
            expect(getByText('game one')).toBeDefined()
        })
    })

    it('shows newest release date when multiple exist', async () => {
        const { getByText } = renderWithClient(<ScrollCategory />)

        await waitFor(() => {
            expect(getByText('12/24/22')).toBeDefined()
        })
    })
})
