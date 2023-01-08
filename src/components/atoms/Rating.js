import { Flex, Text } from '@chakra-ui/react'
import pt from 'prop-types'
import { useMemo } from 'react'

export function Rating({ value = '?' }) {
    const text = useMemo(
        () => (typeof value === 'number' ? Math.round(value) : value),
        [value]
    )

    const bgColor = useMemo(() => {
        if (typeof value !== 'number') return 'grey'

        switch (true) {
            case value >= 75:
                return 'green'
            case value >= 50:
                return 'yellow'
            default:
                return 'red'
        }
    }, [value])

    return (
        <Flex
            bg={bgColor}
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
