import { getRouterBasename } from '../utils'

describe('utils', () => {
    describe('getRouterBasename', () => {
        it('returns prod subdomain for prod env', () => {
            const result = getRouterBasename()

            expect(result).toEqual('/vg-web/')
        })
        it('returns undefined for dev env', () => {
            process.env.NODE_ENV = 'development'
            const result = getRouterBasename()

            expect(result).toEqual(undefined)
            process.env.NODE_ENV = 'test'
        })
    })
})
