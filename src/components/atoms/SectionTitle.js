import { Text } from '@chakra-ui/react'
import pt from 'prop-types'

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
