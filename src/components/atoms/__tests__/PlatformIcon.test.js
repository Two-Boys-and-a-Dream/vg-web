import { render } from '@testing-library/react'
import { PlatformIcon } from '../PlatformIcon/PlatformIcon'

describe('<PlatformIcon />', () => {
    it('renders', () => {
        const { getByTestId } = render(<PlatformIcon />)
        expect(getByTestId('platform-icon')).toBeDefined()
    })
})
