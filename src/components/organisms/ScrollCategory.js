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

    function _renderData() {
        return data?.map((d) => {
            const newestDate = d.release_dates[d.release_dates.length - 1].human

            // map platform ids to simple array of strings
            // const platformIds = d.release_dates.map(
            //     (datum) => datum.platform?.platform_logo?.image_id
            // )

            // remove undefined and duplicate values
            // const uniquePlatforms = [...new Set(platformIds.filter(Boolean))]

            return (
                <GameCard
                    key={d.id}
                    gameTitle={d.name}
                    releaseDate={newestDate}
                    rating={d.total_rating}
                    imageId={d.cover?.image_id}
                    summary={d.summary}
                />
            )
        })
    }

    return (
        <ScrollSection title={title} linkPath={linkPath}>
            {isLoading ? <Loader /> : _renderData()}
        </ScrollSection>
    )
}

ScrollCategory.propTypes = {
    title: pt.string,
    linkPath: pt.string,
    queryName: pt.string,
}
