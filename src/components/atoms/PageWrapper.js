import { Flex } from '@chakra-ui/react'
import { SIZES } from '../../constants'
import pt from 'prop-types'

export function PageWrapper({ children }) {
    return (
        <Flex
            direction="column"
            p={SIZES.pagePadding}
            maxW={SIZES.pageWidth}
            marginLeft={SIZES.navbarWidth}
        >
            {children}
        </Flex>
    )
}

PageWrapper.propTypes = {
    children: pt.node,
}
