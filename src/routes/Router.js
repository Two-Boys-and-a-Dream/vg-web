import { createReactRouter, createRouteConfig } from '@tanstack/react-router'
import { Home, NewGames, PopularGames, UpcomingGames } from '../pages'
import { Layout } from './Layout'

const rootRoute = createRouteConfig({
    component: Layout,
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

export const router = createReactRouter({ routeConfig })
