import { render } from '@testing-library/react'
import { SectionTitle } from '../SectionTitle/SectionTitle'

describe('<SectionTitle />', () => {
    it('renders', () => {
        const { getByText } = render(<SectionTitle />)

        expect(getByText('Section Title')).toBeDefined()
    })
})
