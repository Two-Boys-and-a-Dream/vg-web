import { renderWithClient } from '../../../utils/testUtils'
import { HomeLayout } from '../HomeLayout/HomeLayout'

describe('<HomeLayout />', () => {
    it('renders', () => {
        const root = renderWithClient(<HomeLayout />)

        expect(root).toBeDefined()
    })
})
