import { useMemo } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, NewGames, PopularGames, UpcomingGames } from '../pages'
import { getRouterBasename } from '../utils/utils'
import { Layout } from './Layout'

export function Router() {
    const basename = useMemo(getRouterBasename, [process.env.NODE_ENV])

    return (
        <BrowserRouter basename={basename}>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/new" element={<NewGames />} />
                    <Route path="/upcoming" element={<UpcomingGames />} />
                    <Route path="/popular" element={<PopularGames />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
