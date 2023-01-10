import { useEffect } from 'react'
import { useInfiniteQuery } from 'react-query'
import { QUERY, QUERIES } from '../../api'
import { GameCard } from '../molecules'
import { Loader } from '../atoms'
import { Button, HStack } from '@chakra-ui/react'
import pt from 'prop-types'

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

    function _renderData() {
        return (
            <>
                {data?.pages.map((group, i) => (
                    <HStack
                        key={i}
                        // nowrap for non-paginated uses
                        // ensures the Home screen <ScrollSection /> components
                        // continue to layout properly
                        flexWrap={isPaginated ? 'wrap' : 'nowrap'}
                        justify="space-evenly"
                        gap="6"
                    >
                        {group.data.map(
                            ({
                                release_dates: releaseDates,
                                total_rating: totalRating,
                                cover,
                                name,
                                id,
                                summary,
                            }) => {
                                const newestDate =
                                    releaseDates[releaseDates.length - 1].human

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
                    </HStack>
                ))}

                {/* Hides the fetch next page button on non-paginated queries */}
                {isPaginated ? (
                    <Button
                        onClick={() => fetchNextPage()}
                        disabled={!hasNextPage || isFetchingNextPage}
                    >
                        {isFetchingNextPage
                            ? 'Loading more...'
                            : hasNextPage
                            ? 'Load More'
                            : 'Nothing more to load'}
                    </Button>
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
