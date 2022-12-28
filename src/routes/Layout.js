import { Outlet } from '@tanstack/react-router'
import { Navbar } from '../components'

/**
 * Main component used in @tanstack/react-router
 * This drives the layout of the whole page
 */
export function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}
