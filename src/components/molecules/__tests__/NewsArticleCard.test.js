import { render } from '@testing-library/react'
import { NewsArticleCard } from '../..'
import { FAKE_NEWS } from '../../../data/dummy-data'

describe('<NewsArticleCard />', () => {
    it('renders default', () => {
        const { getByTestId } = render(<NewsArticleCard />)
        expect(getByTestId('news-article-card')).toBeDefined()
    })
    it('renders with data', () => {
        const { getByText } = render(<NewsArticleCard {...FAKE_NEWS[0]} />)
        expect(getByText('article one')).toBeDefined()
    })
})
