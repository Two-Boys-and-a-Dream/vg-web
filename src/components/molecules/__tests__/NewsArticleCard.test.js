import { render } from '@testing-library/react'
import { NewsArticleCard } from '../..'
import { FAKE_NEWS } from '../../../data/dummy-data'

describe('<NewsArticleCard />', () => {
    it('renders', () => {
        const { getByTestId } = render(<NewsArticleCard {...FAKE_NEWS[0]} />)
        expect(getByTestId('news-article-card')).toBeDefined()
    })
})
