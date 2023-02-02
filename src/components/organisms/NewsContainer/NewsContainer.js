import { useQuery } from 'react-query'
import { QUERIES, QUERY } from '../../../api'
import { NewsArticleCard } from '../../molecules'

/**
 * Retrieves news articles from API,
 * Maps out news articles from data
 */
export function NewsContainer() {
    const { key, fn } = QUERY[QUERIES.RECENT_NEWS]
    const { data } = useQuery(key, fn)

    const limitedArticles = data?.slice(0, 3)

    return (
        <>
            {limitedArticles?.map((article) => (
                <NewsArticleCard key={article._id} {...article} />
            ))}
            <button>See More</button>
        </>
    )
}
