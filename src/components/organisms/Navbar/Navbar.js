import { Link } from 'react-router-dom'
import { NewsContainer } from '../NewsContainer/NewsContainer'
import * as styles from './Navbar.module.scss'

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
        <nav className={styles.navbar} data-testid="navbar">
            <h2 className={styles.navHead}>Video Gaming</h2>
            <div className={styles.navLinks}>
                {links.map(({ label, path }) => (
                    <Link key={path} to={path}>
                        <p>{label}</p>
                    </Link>
                ))}
            </div>

            <div className={styles.navNews}>
                <h2 className={styles.navNewsHead}>News</h2>
                <NewsContainer />
            </div>
        </nav>
    )
}
