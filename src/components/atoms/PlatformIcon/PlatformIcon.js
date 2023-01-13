import pt from 'prop-types'

// TODO: Is this still being used?
export function PlatformIcon({ url = 'missing icon' }) {
    return (
        <img
            style={styling}
            data-testid="platform-icon"
            src={url}
            alt={'Platform Icon'}
        />
    )
}

PlatformIcon.propTypes = {
    url: pt.string,
}

// TODO: Move to a sass module
const styling = {
    width: '40px',
    height: '40px',
    borderRadius: '5px',
}
