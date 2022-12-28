import { Flex, Text } from '@chakra-ui/react'
import pt from 'prop-types'

export function Rating({ value = '0' }) {
    return (
        <Flex
            bg={'green'}
            h="50px"
            w="50px"
            borderRadius={'50%'}
            p="0"
            justify={'center'}
            align={'center'}
            alignSelf={'flex-end'}
        >
            <Text>{value}</Text>
        </Flex>
    )
}

Rating.propTypes = {
    value: pt.oneOfType([pt.string, pt.number]),
}
