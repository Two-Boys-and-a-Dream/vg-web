import { Flex } from '@chakra-ui/react'
import { ScrollContainer } from '../components'

export function Home() {
    return (
        <Flex direction="column" p="50px">
            <h1>Home Page</h1>

            <ScrollContainer>
                <>
                    {Array.from(Array(40)).map((_item, index) => (
                        <Flex key={index} border="1px" minW={'250'} h={'250'}>
                            wow
                        </Flex>
                    ))}
                </>
            </ScrollContainer>
        </Flex>
    )
}
