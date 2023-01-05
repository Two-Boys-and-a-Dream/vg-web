import { Link } from 'react-router-dom'
import { VStack, Heading, Text, Flex } from '@chakra-ui/react'
import { SIZES } from '../../constants'
import { NewsContainer } from './NewsContainer'

const links = [
    {
        label: 'Home',
        path: '/',
    },
    {
        label: 'New',
        path: '/new',
    },
    {
        label: 'Upcoming',
        path: '/upcoming',
    },
    {
        label: 'Popular',
        path: '/popular',
    },
]

export function Navbar() {
    return (
        <Flex
            data-testid="navbar"
            borderRight="1px"
            bg={'rgba(245, 245, 245)'}
            direction="column"
            w={SIZES.navbarWidth}
            minH="100vh"
            h="100vh"
            position="fixed"
        >
            <Heading size="lg" borderBottom="2px" textAlign="center" p="4">
                Video Gaming
            </Heading>
            <VStack align="left" p="4">
                {links.map(({ label, path }) => (
                    <Link key={path} to={path}>
                        <Text fontSize="lg">{label}</Text>
                    </Link>
                ))}
            </VStack>

            <VStack align="left" p="4" flexGrow="1" overflowY="auto">
                <Heading size="md">News</Heading>
                <NewsContainer />
            </VStack>
        </Flex>
    )
}
