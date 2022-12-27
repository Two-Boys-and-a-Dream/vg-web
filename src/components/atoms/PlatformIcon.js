import { Image } from '@chakra-ui/react'
import pt from 'prop-types'

export function PlatformIcon({ url }) {
    return (
        <Image
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
