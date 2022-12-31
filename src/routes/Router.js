// import { createBrowserRouter } from 'react-router-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from '../components'
import { Home, NewGames, PopularGames, UpcomingGames } from '../pages'

export function Router() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new" element={<NewGames />} />
                <Route path="/upcoming" element={<UpcomingGames />} />
                <Route path="/popular" element={<PopularGames />} />
            </Routes>
        </BrowserRouter>
    )
}

// export const router = createBrowserRouter([
//     {
//         path: '/',
//         element: (
//             <div>
//                 <Navbar />
//                 <h1>test</h1>
//             </div>
//         ),
//     },
// ])

// import { createReactRouter, createRouteConfig } from '@tanstack/react-router'
// import { Home, NewGames, PopularGames, UpcomingGames } from '../pages'
// import { Layout } from './Layout'

// const rootRoute = createRouteConfig({
//     component: Layout,
// })

// const homeRoute = rootRoute.createRoute({
//     path: '/',
//     component: Home,
// })

// const newGamesRoute = rootRoute.createRoute({
//     path: '/new',
//     component: NewGames,
// })

// const popularGamesRoute = rootRoute.createRoute({
//     path: '/popular',
//     component: PopularGames,
// })

// const upcomingGamesRoute = rootRoute.createRoute({
//     path: '/upcoming',
//     component: UpcomingGames,
// })

// const routeConfig = rootRoute.addChildren([
//     homeRoute,
//     newGamesRoute,
//     popularGamesRoute,
//     upcomingGamesRoute,
// ])

// export const router = createReactRouter({ routeConfig })
