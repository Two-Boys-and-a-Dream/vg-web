import { Outlet } from 'react-router-dom'
import { Navbar, PageWrapper } from '../../components'
import * as styles from './Layout.module.scss'

/**
 * Main component used in @tanstack/react-router
 * This drives the layout of the whole page
 */
export function Layout() {
    return (
        <div className={styles.layout}>
            <Navbar />
            <PageWrapper>
                <Outlet />
            </PageWrapper>
        </div>
    )
}
