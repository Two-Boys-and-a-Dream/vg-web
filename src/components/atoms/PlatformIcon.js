import { Image } from '@chakra-ui/react'
import pt from 'prop-types'

export function PlatformIcon({ url = 'missing icon' }) {
    return (
        <Image
            data-testid="platform-icon"
            boxSize={'25px'}
            borderRadius={'full'}
            objectFit={'cover'}
            src={url}
        />
    )
}

PlatformIcon.propTypes = {
    url: pt.string,
}
