import { Outlet } from 'react-router-dom'
import { Hero, Navbar, PageWrapper } from '../../../components'
import * as styles from './HomeLayout.module.scss'

/**
 * Main component used in react-router-dom
 * This drives the layout of the home page, adding the hero.
 */
export function HomeLayout() {
    return (
        <div>
            <Hero />
            <div className={styles.layout}>
                <PageWrapper>
                    <Outlet />
                </PageWrapper>
                <Navbar />
            </div>
        </div>
    )
}
