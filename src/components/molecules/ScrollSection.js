import { Flex, Link as ChakraLink } from '@chakra-ui/react'
import { Link } from '@tanstack/react-router'
import { ScrollContainer, SectionTitle } from '../atoms'
import pt from 'prop-types'

/**
 * Combines the horizontal scroll container, and the title/link above it.
 * Provide linkPath to render optional link.
 */
export function ScrollSection({
    title = 'Default Title',
    linkPath,
    linkText = 'See All',
    children,
}) {
    return (
        <Flex direction="column" mb="20px">
            <Flex justify="space-between">
                <SectionTitle>{title}</SectionTitle>
                {linkPath ? (
                    <ChakraLink as={Link} to={linkPath}>
                        {linkText}
                    </ChakraLink>
                ) : null}
            </Flex>

            <ScrollContainer>{children}</ScrollContainer>
        </Flex>
    )
}

ScrollSection.propTypes = {
    title: pt.string,
    children: pt.node,
    linkPath: pt.string,
    linkText: pt.string,
}
