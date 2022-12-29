import { useQuery } from 'react-query'
import { QUERIES, QUERY } from '../../api'
import { Loader } from '../atoms'
import { GameCard, ScrollSection } from '../molecules'
import pt from 'prop-types'

/**
 * A full data/loading state wrapper for ScrollSections. Provide queryName
 * to hook into a query key.
 * @see {@link QUERY}
 */
export function ScrollCategory({
    title = 'Games',
    linkPath,
    queryName = QUERIES.NEW_GAMES_LIGHT,
}) {
    const { key, fn } = QUERY[queryName]
    const { data, isLoading } = useQuery(key, fn)

    return (
        <ScrollSection title={title} linkPath={linkPath}>
            {isLoading ? (
                <Loader />
            ) : (
                data?.map((d) => {
                    const newestDate =
                        d.release_dates[d.release_dates.length - 1].human

                    return (
                        <GameCard
                            key={d.id}
                            gameTitle={d.name}
                            releaseDate={newestDate}
                        />
                    )
                })
            )}
        </ScrollSection>
    )
}

ScrollCategory.propTypes = {
    title: pt.string,
    linkPath: pt.string,
    queryName: pt.string,
}
