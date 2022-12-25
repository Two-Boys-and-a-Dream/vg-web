import { Image } from '@chakra-ui/react'

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
