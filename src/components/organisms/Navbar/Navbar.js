import { Link, NavLink } from 'react-router-dom'
import { NewsContainer } from '../NewsContainer/NewsContainer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import * as styles from './Navbar.module.scss'

const links = [
    {
        label: 'HOME',
        path: '/',
    },
    {
        label: 'NEW',
        path: '/new',
    },
    {
        label: 'UPCOMING',
        path: '/upcoming',
    },
    {
        label: 'POPULAR',
        path: '/popular',
    },
]

export function Navbar() {
    return (
        <nav className={styles.navbar} data-testid="navbar">
            <h2 className={styles.navHead}>THE LATEST</h2>
            <ul className={styles.navLinks}>
                {links.map(({ label, path }) => (
                    <li key={path}>
                        <NavLink
                            to={path}
                            className={({ isActive }) =>
                                isActive
                                    ? styles.activeLink
                                    : styles.inactiveLink
                            }
                        >
                            {label}
                        </NavLink>
                    </li>
                ))}
            </ul>

            <h2>News</h2>
            <div className={styles.navNews}>
                <NewsContainer />
                <Link to="news" className={styles.seeMoreLink}>
                    SEE MORE{' '}
                    <FontAwesomeIcon icon={faCircleArrowRight} size="sm" />
                </Link>
            </div>
        </nav>
    )
}
