import { Flex } from '@chakra-ui/layout'
import { Outlet } from 'react-router-dom'
import { Navbar, PageWrapper } from '../components'

/**
 * Main component used in @tanstack/react-router
 * This drives the layout of the whole page
 */
export function Layout() {
    return (
        <Flex>
            <Navbar />
            <PageWrapper>
                <Outlet />
            </PageWrapper>
        </Flex>
    )
}
