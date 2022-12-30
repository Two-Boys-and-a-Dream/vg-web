import { Image } from '@chakra-ui/react'
import pt from 'prop-types'

export function PlatformIcon({ url = 'missing icon' }) {
    return (
        <Image
            data-testid="platform-icon"
            boxSize={'40px'}
            borderRadius={'5px'}
            src={url}
        />
    )
}

PlatformIcon.propTypes = {
    url: pt.string,
}
