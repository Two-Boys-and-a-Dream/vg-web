import { DateTime } from 'luxon'

/**
 * Builds appropriate basename prop for React Router.
 * Since we deploy to a subdomain of github pages, prod needs additional basename.
 */
export function getRouterBasename() {
    return process.env.NODE_ENV === 'development' ? undefined : '/vg-web/'
}

/**
 * Formats RFC2822 date to human readable string. Must match RFC2822 format!
 * @see https://moment.github.io/luxon/#/parsing?id=http-and-rfc2822
 * @param {String} date Ex. Fri, 13 Jan 2023 21:50:13 +0000
 * @returns {String} Ex. 1/13/2023
 */
export function rfcToHumanDate(date) {
    return DateTime.fromRFC2822(date).toLocaleString()
}

/**
 * Formats unix (seconds) to human readable string.
 * @see https://moment.github.io/luxon/#/parsing?id=unix-timestamps
 * @param {String} date 1675296000
 * @returns {String} Ex. 1/13/2023
 */
export function unixToHumanDate(date) {
    return DateTime.fromSeconds(date).toLocaleString()
}
