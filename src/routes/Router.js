import { useMemo } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QUERIES } from '../api'
import { GamesPage, Home } from '../pages'
import { getRouterBasename } from '../utils/utils'
import { MainLayout, HomeLayout } from './Layouts'

export function Router() {
    const basename = useMemo(getRouterBasename, [process.env.NODE_ENV])

    return (
        <BrowserRouter basename={basename}>
            <Routes>
                <Route element={<HomeLayout />}>
                    <Route path="/" element={<Home />} />
                </Route>
                <Route element={<MainLayout />}>
                    <Route
                        path="new"
                        element={
                            <GamesPage
                                title="New Games"
                                queryName={QUERIES.NEW_GAMES_PAGINATED}
                            />
                        }
                    />
                    <Route
                        path="upcoming"
                        element={
                            <GamesPage
                                title="Upcoming Games"
                                queryName={QUERIES.UPCOMING_GAMES_PAGINATED}
                            />
                        }
                    />
                    <Route
                        path="popular"
                        element={
                            <GamesPage
                                title="Popular Games"
                                queryName={QUERIES.POPULAR_GAMES_PAGINATED}
                            />
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
