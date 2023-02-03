import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom'
import { QUERIES } from '../api'
import { GamesPage, Home } from '../pages'
import { getRouterBasename } from '../utils/utils'
import { MainLayout } from './Layouts'

const routes = createRoutesFromElements(
    <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />

        <Route
            path="new"
            element={
                <GamesPage
                    title="New Releases"
                    queryName={QUERIES.NEW_GAMES_PAGINATED}
                />
            }
        />
        <Route
            path="upcoming"
            element={
                <GamesPage
                    title="Upcoming"
                    queryName={QUERIES.UPCOMING_GAMES_PAGINATED}
                />
            }
        />
        <Route
            path="popular"
            element={
                <GamesPage
                    title="Popular"
                    queryName={QUERIES.POPULAR_GAMES_PAGINATED}
                />
            }
        />
        <Route path="news" element={<p>News goes here</p>} />
    </Route>
)

const basename = getRouterBasename()
export const router = createBrowserRouter(routes, { basename })
