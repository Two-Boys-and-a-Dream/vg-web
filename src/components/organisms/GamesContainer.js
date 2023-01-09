import { useQuery } from 'react-query'
import { QUERY, QUERIES } from '../../api'
import { GameCard } from '../molecules'
import { Loader } from '../atoms'
import pt from 'prop-types'

export function GamesContainer({ queryName = QUERIES.NEW_GAMES_LIGHT }) {
    const { key, fn } = QUERY[queryName]
    const { data, isLoading } = useQuery(key, fn)

    function _renderData() {
        return data?.map(
            ({
                release_dates: releaseDates,
                total_rating: totalRating,
                cover,
                name,
                id,
                summary,
            }) => {
                const newestDate = releaseDates[releaseDates.length - 1].human

                return (
                    <GameCard
                        key={id}
                        gameTitle={name}
                        releaseDate={newestDate}
                        rating={totalRating}
                        imageId={cover?.image_id}
                        summary={summary}
                    />
                )
            }
        )
    }

    return isLoading ? <Loader /> : _renderData()
}

GamesContainer.propTypes = {
    title: pt.string,
    queryName: pt.string,
}
