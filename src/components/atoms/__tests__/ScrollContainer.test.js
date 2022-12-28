import { render } from '@testing-library/react'
import { ScrollContainer } from '../ScrollContainer'

const childElement = <p>hi</p>

describe('<ScrollContainer />', () => {
    it('renders', () => {
        const root = render(<ScrollContainer />)

        expect(root).toBeDefined()
    })
    it('renders children properly in horizontal mode', () => {
        const { getByText } = render(
            <ScrollContainer>{childElement}</ScrollContainer>
        )

        expect(getByText('hi')).toBeDefined()
    })
    it('renders children properly in vertical mode', () => {
        const { getByText } = render(
            <ScrollContainer horizontal={false}>{childElement}</ScrollContainer>
        )

        expect(getByText('hi')).toBeDefined()
    })
})
