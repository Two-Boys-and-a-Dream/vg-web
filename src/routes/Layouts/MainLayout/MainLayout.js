import { Outlet } from 'react-router-dom'
import { Navbar, PageWrapper } from '../../../components'
import * as styles from './MainLayout.module.scss'

/**
 * Main component used in react-router-dom
 * This drives the layout of non-home pages
 */
export function MainLayout() {
    return (
        <div className={styles.layout}>
            <Navbar />
            <PageWrapper>
                <Outlet />
            </PageWrapper>
        </div>
    )
}
