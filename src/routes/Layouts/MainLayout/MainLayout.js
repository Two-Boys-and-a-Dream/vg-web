import { Outlet, useLocation, ScrollRestoration } from 'react-router-dom'
import { Navbar, PageWrapper, Hero } from '../../../components'
import * as styles from './MainLayout.module.scss'

/**
 * Main component used in react-router-dom
 * This drives the layout of non-home pages
 */
export function MainLayout() {
    const { pathname } = useLocation()

    return (
        <div>
            <ScrollRestoration getKey={(location) => location?.pathname} />

            {/* Render Hero component on root path */}
            {pathname === '/' ? <Hero /> : null}

            <div className={styles.layout}>
                <PageWrapper>
                    <Outlet />
                </PageWrapper>
                <Navbar />
            </div>
        </div>
    )
}
