import { request } from './request'

/**
 * This is a basic list of enums for simplicity in referencing existing query keys.
 * Add to this as we go.
 */
export const QUERIES = {
    NEW_GAMES_LIGHT: 'new_games_light',
}

/**
 * To add a new query:
 * 1. Add to QUERIES enum list above @see {@link QUERIES}.
 * 2. Use enum string as object key, as well as value for {key}.
 * 3. Provide the fn you want this query key to use.
 */
export const QUERY = {
    [QUERIES.NEW_GAMES_LIGHT]: {
        key: QUERIES.NEW_GAMES_LIGHT,
        fn: () => request('games/new'),
    },
}
