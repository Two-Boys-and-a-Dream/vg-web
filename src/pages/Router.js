import '../App.module.css'
import {
    Outlet,
    RouterProvider,
    createReactRouter,
    createRouteConfig,
} from '@tanstack/react-router'
import Home from './Home'
import NewGames from './NewGames'
import PopularGames from './PopularGames'
import UpcomingGames from './UpcomingGames'
import Navbar from '../components/organisms/Navbar'

const rootRoute = createRouteConfig({
    component: () => (
        <>
            <Navbar />
            <Outlet />
        </>
    ),
})

const homeRoute = rootRoute.createRoute({
    path: '/',
    component: Home,
})

const newGamesRoute = rootRoute.createRoute({
    path: '/new',
    component: NewGames,
})

const popularGamesRoute = rootRoute.createRoute({
    path: '/popular',
    component: PopularGames,
})

const upcomingGamesRoute = rootRoute.createRoute({
    path: '/upcoming',
    component: UpcomingGames,
})

const routeConfig = rootRoute.addChildren([
    homeRoute,
    newGamesRoute,
    popularGamesRoute,
    upcomingGamesRoute,
])

const router = createReactRouter({ routeConfig })

export default function Router() {
    return <RouterProvider router={router} />
}
