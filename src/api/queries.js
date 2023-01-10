import { request } from './request'

/**
 * This is a basic list of enums for simplicity in referencing existing query keys.
 * Add to this as we go.
 */
export const QUERIES = {
    NEW_GAMES_LIGHT: 'new_games_light',
    UPCOMING_GAMES_LIGHT: 'upcoming_games_light',
    POPULAR_GAMES_LIGHT: 'popular_games_light',
    NEW_GAMES_PAGINATED: 'new_games_paginated',
    UPCOMING_GAMES_PAGINATED: 'upcoming_games_paginated',
    POPULAR_GAMES_PAGINATED: 'popular_games_paginated',
    RECENT_NEWS: 'recent_news',
}

/**
 * To add a new query:
 * 1. Add to QUERIES enum list above @see {@link QUERIES}.
 * 2. Use enum string as object key, as well as value for {key}.
 * 3. Provide the fn you want this query key to use.
 */
export const QUERY = {
    [QUERIES.NEW_GAMES_LIGHT]: {
        key: [QUERIES.NEW_GAMES_LIGHT],
        fn: () => request('games/new'),
    },
    [QUERIES.UPCOMING_GAMES_LIGHT]: {
        key: [QUERIES.UPCOMING_GAMES_LIGHT],
        fn: () => request('games/upcoming'),
    },
    [QUERIES.POPULAR_GAMES_LIGHT]: {
        key: [QUERIES.POPULAR_GAMES_LIGHT],
        fn: () => request('games/popular'),
    },
    [QUERIES.NEW_GAMES_PAGINATED]: {
        key: [QUERIES.NEW_GAMES_PAGINATED],
        fn: ({ pageParam = 0 }) =>
            request(`games/new?limit=${25}&offset=${pageParam}`),
    },
    [QUERIES.UPCOMING_GAMES_PAGINATED]: {
        key: [QUERIES.UPCOMING_GAMES_PAGINATED],
        fn: ({ pageParam = 0 }) =>
            request(`games/upcoming?limit=${25}&offset=${pageParam}`),
    },
    [QUERIES.POPULAR_GAMES_PAGINATED]: {
        key: [QUERIES.POPULAR_GAMES_PAGINATED],
        fn: ({ pageParam = 0 }) =>
            request(`games/popular?limit=${25}&offset=${pageParam}`),
    },
    [QUERIES.RECENT_NEWS]: {
        key: [QUERIES.RECENT_NEWS],
        fn: () => request('news/recent'),
    },
}
