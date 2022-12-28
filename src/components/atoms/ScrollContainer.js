import { useMemo } from 'react'
import { Stack } from '@chakra-ui/react'
import pt from 'prop-types'

/**
 * A container that is scrollable horizontal or vertical.
 * Adds spacing to children elements.
 * Pass in any Chakra prop to style, it will affect the parent div (as ...rest)
 * @see https://chakra-ui.com/docs/styled-system/style-props
 */
export function ScrollContainer({ horizontal = true, children, ...rest }) {
    const scrollStyles = useMemo(
        () => ({
            overflowX: horizontal ? 'scroll' : 'hidden',
            overflowY: horizontal ? 'hidden' : 'scroll',
        }),
        [horizontal]
    )

    return (
        <Stack
            direction={horizontal ? 'row' : 'column'}
            spacing={20}
            border="1px"
            borderColor="blue"
            {...scrollStyles}
            {...rest}
        >
            {children}
        </Stack>
    )
}

ScrollContainer.propTypes = {
    horizontal: pt.bool,
    children: pt.node,
}
