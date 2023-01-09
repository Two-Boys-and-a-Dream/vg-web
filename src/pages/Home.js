import { QUERIES } from '../api'
import { ScrollCategory } from '../components'

export function Home() {
    return (
        <>
            <ScrollCategory
                title="New Releases"
                linkPath="new"
                queryName={QUERIES.NEW_GAMES_LIGHT}
            />
            <ScrollCategory
                title="Popular Games"
                linkPath="popular"
                queryName={QUERIES.POPULAR_GAMES_LIGHT}
            />
            <ScrollCategory
                title="Upcoming Games"
                linkPath="upcoming"
                queryName={QUERIES.UPCOMING_GAMES_LIGHT}
            />
        </>
    )
}
