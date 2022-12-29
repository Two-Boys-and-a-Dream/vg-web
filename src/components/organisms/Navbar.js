import { Link } from '@tanstack/react-router'
import { VStack, Heading, Text, Flex } from '@chakra-ui/react'

export function Navbar() {
    return (
        <Flex
            data-testid="navbar"
            borderRight="1px"
            bg="red"
            display="flex"
            flexDir="column"
            minW="250px"
            minH="100vh"
        >
            <Heading size="lg" borderBottom="2px" textAlign="center" p="4">
                Video Gaming
            </Heading>
            <VStack align="left" p="4">
                <Link to="/">
                    <Text fontSize="lg">Home</Text>
                </Link>
                <Link to="/new">
                    <Text fontSize="lg">NewGames</Text>
                </Link>
                <Link to="/upcoming">
                    <Text fontSize="lg">UpcomingGames</Text>
                </Link>
                <Link to="/popular">
                    <Text fontSize="lg">PopularGames</Text>
                </Link>
            </VStack>
            <VStack align="left" p="4">
                <Heading size="sm">News</Heading>
                {/* Map arcticles here */}
            </VStack>
        </Flex>
    )
}
