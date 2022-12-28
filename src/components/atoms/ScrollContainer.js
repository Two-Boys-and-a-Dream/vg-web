import { useMemo } from 'react'
import { Stack } from '@chakra-ui/react'
import pt from 'prop-types'

/**
 * A container that is scrollable horizontal or vertical.
 * Adds spacing to children elements.
 * Pass in any Chakra prop to style, it will affect the parent div (as ...rest)
 * @see https://chakra-ui.com/docs/styled-system/style-props
 */
export function ScrollContainer({
    horizontal = true,
    spacing = '30px',
    children,
    ...rest
}) {
    const scrollStyles = useMemo(
        () => ({
            overflowX: horizontal ? 'auto' : 'hidden',
            overflowY: horizontal ? 'hidden' : 'auto',
        }),
        [horizontal]
    )

    return (
        <Stack
            direction={horizontal ? 'row' : 'column'}
            spacing={spacing}
            padding={`${spacing} 0`}
            mb={spacing}
            {...scrollStyles}
            {...rest}
        >
            {children}
        </Stack>
    )
}

ScrollContainer.propTypes = {
    horizontal: pt.bool,
    spacing: pt.oneOfType([pt.string, pt.number]),
    children: pt.node,
}
