import { Flex } from '@chakra-ui/react'
import { QUERIES } from '../api'
import { ScrollCategory } from '../components'

export function Home() {
    return (
        <Flex direction="column" p="50px">
            <ScrollCategory
                title="New Releases"
                linkPath="new"
                queryName={QUERIES.NEW_GAMES_LIGHT}
            />
        </Flex>
    )
}
