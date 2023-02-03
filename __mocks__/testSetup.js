'use strict'

jest.mock('axios')

jest.mock('react-router-dom', () => {
    const actual = jest.requireActual('react-router-dom')
    const mocked = jest.createMockFromModule('react-router-dom')

    // Make link just pass through
    function Passthrough({ children }) {
        return children
    }

    return {
        ...actual,
        Link: Passthrough,
        RouterProvider: mocked.RouterProvider,
        Outlet: mocked.Outlet,
        useLocation: jest.fn().mockReturnValue({ pathname: '/' }),
        ScrollRestoration: Passthrough,
    }
})

process.env.API_URL = 'https://test.com/'

global.console.warn = jest.fn()
global.console.error = jest.fn()
