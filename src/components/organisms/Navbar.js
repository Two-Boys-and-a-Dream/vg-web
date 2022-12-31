import { Link } from 'react-router-dom'
import { VStack, Heading, Text, Flex } from '@chakra-ui/react'
import { SIZES } from '../../constants'
import { NewsArticleCard } from '../molecules/'

export function Navbar() {
    return (
        <Flex
            data-testid="navbar"
            borderRight="1px"
            bg="lightgrey"
            direction="column"
            w={SIZES.navbarWidth}
            minH="100vh"
            position="fixed"
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
            <VStack align="left" p="4" flexGrow="1" overflowY="auto">
                <Heading size="sm">News</Heading>
                {/* Map arcticles here */}
                <NewsArticleCard />
            </VStack>
        </Flex>
    )
}
