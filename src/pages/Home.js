import { QUERIES } from '../api'
import { PageWrapper, ScrollCategory } from '../components'

export function Home() {
    return (
        <PageWrapper>
            <ScrollCategory
                title="New Releases"
                linkPath="new"
                queryName={QUERIES.NEW_GAMES_LIGHT}
            />
        </PageWrapper>
    )
}
