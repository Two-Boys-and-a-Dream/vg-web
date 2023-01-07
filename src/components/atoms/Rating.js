import { Flex, Text } from '@chakra-ui/react'
import pt from 'prop-types'
import { useMemo } from 'react'

export function Rating({ value = '?' }) {
    const text = useMemo(
        () => (typeof value === 'number' ? Math.round(value) : value),
        [value]
    )

    return (
        <Flex
            bg={'green'}
            h="50px"
            minW="50px"
            borderRadius={'20%'}
            justify={'center'}
            align={'center'}
        >
            <Text>{text}</Text>
        </Flex>
    )
}

Rating.propTypes = {
    value: pt.oneOfType([pt.string, pt.number]),
}
