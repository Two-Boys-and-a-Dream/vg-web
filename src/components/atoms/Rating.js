import { Flex, Text } from '@chakra-ui/react'

export function Rating({ value }) {
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
