import { Flex } from '@chakra-ui/react'
import { GameCard, ScrollSection } from '../components'

export function Home() {
    return (
        <Flex direction="column" p="50px">
            <ScrollSection title="New Releases" linkPath="new">
                {Array.from(Array(40)).map((_item, index) => (
                    <GameCard key={index} />
                ))}
            </ScrollSection>

            <ScrollSection title="Popular" linkPath="popular">
                {Array.from(Array(40)).map((_item, index) => (
                    <GameCard key={index} />
                ))}
            </ScrollSection>
        </Flex>
    )
}
