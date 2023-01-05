import { useQuery } from 'react-query'
import { QUERIES, QUERY } from '../../api'
import { NewsArticleCard } from '../molecules'
import { ScrollContainer } from '../atoms'

/**
 * Retrieves news articles from API,
 * Maps out news articles from data
 */
export function NewsContainer() {
    const { key, fn } = QUERY[QUERIES.RECENT_NEWS]
    const { data } = useQuery(key, fn)

    return (
        <ScrollContainer horizontal={false}>
            {data?.map(({ _id, title, image, link }) => (
                <NewsArticleCard
                    key={_id}
                    title={title}
                    thumbnail={image}
                    link={link}
                />
            ))}
        </ScrollContainer>
    )
}
