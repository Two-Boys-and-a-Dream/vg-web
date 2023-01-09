import { useQuery } from 'react-query'
import { QUERIES, QUERY } from '../api'
import { Heading, HStack, VStack } from '@chakra-ui/react'
import { GameCard } from '../components'
import { Loader } from '../components/atoms'
import pt from 'prop-types'

export function GamesPage({
    title = 'Missing Page Title',
    queryName = QUERIES.NEW_GAMES_LIGHT,
}) {
    const { key, fn } = QUERY[queryName]
    const { data, isLoading } = useQuery(key, fn)

    function _renderData() {
        return data?.map((d) => {
            const newestDate = d.release_dates[d.release_dates.length - 1].human

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
        <VStack gap="2">
            <Heading alignSelf="flex-start">{title}</Heading>
            <HStack flexWrap="wrap" justify="space-evenly" gap="6">
                {isLoading ? <Loader /> : _renderData()}
            </HStack>
        </VStack>
    )
}

GamesPage.propTypes = {
    title: pt.string,
    queryName: pt.string,
}
