import axios from 'axios'

/**
 * API request wrapper.
 * @param {String} endpoint query path of API you want to hit.
 * @param {Object} headers (optional)
 * @returns {Promise<Array>} data
 */
export async function request(endpoint = '', headers = {}) {
    const url = process.env.API_URL + endpoint

    const result = await axios.get(url, headers)

    return result.data
}
