import { Heading, VStack } from '@chakra-ui/react'
import { GamesContainer } from '../components'
import pt from 'prop-types'

/**
 * Wraps the GamesContainer data, styles the layout for a full page scrolling experience.
 * Provide queryName to hook into a query key.
 * @see {@link queries.js}
 */
export function GamesPage({ title = 'Missing Page Title', queryName }) {
    return (
        <VStack gap="2">
            <Heading alignSelf="flex-start">{title}</Heading>
            <GamesContainer queryName={queryName} />
        </VStack>
    )
}

GamesPage.propTypes = {
    title: pt.string,
    queryName: pt.string,
}
