import { Flex, Spinner } from '@chakra-ui/react'

/**
 * A centered loading spinner.
 */
export function Loader() {
    return (
        <Flex justify="center" align="center" w="100%" data-testid="loader">
            <Spinner />
        </Flex>
    )
}
