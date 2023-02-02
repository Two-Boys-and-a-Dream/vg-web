import { Fragment, useEffect, useMemo } from 'react'
import { useInfiniteQuery } from 'react-query'
import { QUERY, QUERIES } from '../../../api'
import { GameCard } from '../../molecules'
import { Loader } from '../../atoms'
import pt from 'prop-types'
import * as styles from './GamesContainer.module.scss'

/**
 * Controls data/fetching states for game data via react-query.
 * Handles pagination, and further fetching.
 * Shows <Loader /> component while data fetching.
 * Returns mapped out <GameCard /> components after data fetch
 * Pass in queryName.
 * @see {@link QUERIES}
 */
export function GamesContainer({ queryName = QUERIES.NEW_GAMES_PAGINATED }) {
    const { key, fn } = QUERY[queryName]
    const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } =
        useInfiniteQuery(key, fn, {
            getNextPageParam: (lastPage) => lastPage.nextCursor,
        })
    const isPaginated = queryName.includes('paginated')

    /**
     * handles infinite scrolling for paginated screens
     * @see https://blog.openreplay.com/infinite-scrolling-with-react-query/
     */
    useEffect(() => {
        if (isPaginated) {
            let fetching = false
            const handleScroll = async (e) => {
                const { scrollHeight, scrollTop, clientHeight } =
                    e.target.scrollingElement
                if (
                    !fetching &&
                    scrollHeight - scrollTop <= clientHeight * 1.2
                ) {
                    fetching = true
                    if (hasNextPage) await fetchNextPage()
                    fetching = false
                }
            }
            document.addEventListener('scroll', handleScroll)
            return () => {
                document.removeEventListener('scroll', handleScroll)
            }
        }
    }, [fetchNextPage, hasNextPage, queryName])

    /**
     * Triggers next data pull for pagination
     */
    function fetchNext() {
        fetchNextPage()
    }

    /**
     * Determines text of pagination button
     */
    const buttonText = useMemo(() => {
        if (isFetchingNextPage) return 'Loading more...'
        if (hasNextPage) return 'Load More'

        return 'Nothing more to load'
    }, [isFetchingNextPage, hasNextPage])

    function _renderData() {
        return (
            <>
                <div
                    // nowrap for non-paginated uses
                    // ensures the Home screen <ScrollSection /> components
                    // continue to layout properly
                    className={`${styles.gamesContainer} ${
                        isPaginated && styles.gamesWrap
                    }`}
                >
                    {data?.pages.map((group) => (
                        <Fragment key={`page-${group.data[0].id}`}>
                            {group.data.map(
                                ({
                                    release_dates: releaseDates,
                                    total_rating: totalRating,
                                    cover,
                                    name,
                                    id,
                                    summary,
                                }) => {
                                    // TODO: This is NOT the newest date. These aren't sorted.
                                    const newestDate =
                                        releaseDates[releaseDates.length - 1]
                                            .date

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
                            )}
                        </Fragment>
                    ))}
                </div>

                {/* Hides the fetch next page button on non-paginated queries */}
                {isPaginated ? (
                    <button
                        onClick={fetchNext}
                        disabled={!hasNextPage || isFetchingNextPage}
                    >
                        {buttonText}
                    </button>
                ) : null}
            </>
        )
    }

    return isFetching && !isFetchingNextPage ? <Loader /> : _renderData()
}

GamesContainer.propTypes = {
    title: pt.string,
    queryName: pt.string,
}
