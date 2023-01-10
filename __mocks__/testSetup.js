'use strict'

jest.mock('axios')

jest.mock('react-router-dom', () => {
    const actual = jest.requireActual('react-router-dom')
    const mocked = jest.createMockFromModule('react-router-dom')

    // Make link just pass through
    function Link({ children }) {
        return children
    }

    return {
        ...actual,
        Link,
        RouterProvider: mocked.RouterProvider,
        Outlet: mocked.Outlet,
    }
})

process.env.API_URL = 'https://test.com/'

global.console.log = jest.fn()
global.console.warn = jest.fn()
global.console.error = jest.fn()
