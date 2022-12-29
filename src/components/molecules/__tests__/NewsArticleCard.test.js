import { render } from '@testing-library/react'
import { NewsArticleCard } from '../..'

describe('<NewsArticleCard />', () => {
    it('renders', () => {
        const { getByTestId } = render(<NewsArticleCard />)
        expect(getByTestId('news-article-card')).toBeDefined()
    })
})
