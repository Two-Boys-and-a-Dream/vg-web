import { Text } from '@chakra-ui/react'
import pt from 'prop-types'

/**
 * The header/title used above different sections.
 */
export function SectionTitle({ children = 'Section Title' }) {
    return (
        <Text fontSize="xl" fontWeight={600}>
            {children}
        </Text>
    )
}

SectionTitle.propTypes = {
    children: pt.string,
}
