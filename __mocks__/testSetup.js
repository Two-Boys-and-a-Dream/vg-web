'use strict'

jest.mock('@tanstack/react-router', () => {
    const actual = jest.requireActual('@tanstack/react-router')
    const mocked = jest.createMockFromModule('@tanstack/react-router')

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