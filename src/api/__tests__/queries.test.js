import { QUERIES, QUERY } from '../queries'
import { request } from '../request'

jest.mock('../request')

beforeEach(() => {
    jest.resetAllMocks()
})

afterAll(() => {
    jest.restoreAllMocks()
})

describe('QUERY', () => {
    it('calls request with proper args for NEW_GAMES_LIGHT', async () => {
        await QUERY[QUERIES.NEW_GAMES_LIGHT].fn()

        expect(request).toHaveBeenCalledTimes(1)
        expect(request).toHaveBeenCalledWith('games/new')
    })
    it('calls request with proper args for UPCOMING_GAMES_LIGHT', async () => {
        await QUERY[QUERIES.UPCOMING_GAMES_LIGHT].fn()

        expect(request).toHaveBeenCalledTimes(1)
        expect(request).toHaveBeenCalledWith('games/upcoming')
    })
    it('calls request with proper args for POPULAR_GAMES_LIGHT', async () => {
        await QUERY[QUERIES.POPULAR_GAMES_LIGHT].fn()

        expect(request).toHaveBeenCalledTimes(1)
        expect(request).toHaveBeenCalledWith('games/popular')
    })
    it('calls request with proper args for NEW_GAMES_PAGINATED', async () => {
        await QUERY[QUERIES.NEW_GAMES_PAGINATED].fn({})

        expect(request).toHaveBeenCalledTimes(1)
        expect(request).toHaveBeenCalledWith('games/new?limit=25&offset=0')
    })
    it('calls request with proper args for UPCOMING_GAMES_PAGINATED', async () => {
        await QUERY[QUERIES.UPCOMING_GAMES_PAGINATED].fn({})

        expect(request).toHaveBeenCalledTimes(1)
        expect(request).toHaveBeenCalledWith('games/upcoming?limit=25&offset=0')
    })
    it('calls request with proper args for POPULAR_GAMES_PAGINATED', async () => {
        await QUERY[QUERIES.POPULAR_GAMES_PAGINATED].fn({})

        expect(request).toHaveBeenCalledTimes(1)
        expect(request).toHaveBeenCalledWith('games/popular?limit=25&offset=0')
    })
    it('calls request with proper args for RECENT_NEWS', async () => {
        await QUERY[QUERIES.RECENT_NEWS].fn()

        expect(request).toHaveBeenCalledTimes(1)
        expect(request).toHaveBeenCalledWith('news/recent')
    })
})
