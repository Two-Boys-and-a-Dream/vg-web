import { QUERIES } from '../../api'
import { ScrollCategory } from '../../components'
import * as styles from './Home.module.scss'

export function Home() {
    return (
        <div className={styles.container}>
            <ScrollCategory
                title="New Releases"
                queryName={QUERIES.NEW_GAMES_LIGHT}
            />
            <ScrollCategory
                title="Upcoming"
                queryName={QUERIES.UPCOMING_GAMES_LIGHT}
            />
            <ScrollCategory
                title="Popular"
                queryName={QUERIES.POPULAR_GAMES_LIGHT}
            />
        </div>
    )
}
