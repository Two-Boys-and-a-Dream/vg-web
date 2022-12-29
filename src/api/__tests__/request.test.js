import axios from 'axios'
import { request } from '../request'

const data = [{ id: '1' }]
const endpoint = 'test/endpoint'
const headers = { customHeaderStuff: 'something' }

beforeEach(() => {
    axios.get.mockResolvedValue({ data })
})

describe('request', () => {
    it('returns axios data', async () => {
        const result = await request(endpoint)

        expect(result).toEqual(data)
    })
    it('calls axios with default args', async () => {
        await request()

        expect(axios.get).toHaveBeenCalledWith('https://test.com/', {})
    })
    it('calls axios with custom args', async () => {
        await request(endpoint, headers)

        expect(axios.get).toHaveBeenCalledWith(
            'https://test.com/' + endpoint,
            headers
        )
    })
})
