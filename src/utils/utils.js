/**
 * Builds appropriate basename prop for React Router.
 * Since we deploy to a subdomain of github pages, prod needs additional basename.
 */
export function getRouterBasename() {
    return process.env.NODE_ENV === 'development' ? undefined : '/vg-web/'
}
