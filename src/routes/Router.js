import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, NewGames, PopularGames, UpcomingGames } from '../pages'
import { Layout } from './Layout'

export function Router() {
    return (
        <BrowserRouter>
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
