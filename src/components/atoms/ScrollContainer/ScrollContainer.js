import { useMemo } from 'react'
import pt from 'prop-types'

// TODO: Update the jsdoc for this component.
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
            padding: horizontal
                ? `${spacing} 0`
                : `${spacing} 5px ${spacing} 0`,
        }),
        [horizontal]
    )

    return (
        <div style={styling(scrollStyles, horizontal, spacing, rest)}>
            {children}
        </div>
    )
}

ScrollContainer.propTypes = {
    horizontal: pt.bool,
    spacing: pt.oneOfType([pt.string, pt.number]),
    children: pt.node,
}

const styling = (scrollStyles, horizontal, spacing, rest) => {
    return {
        ...scrollStyles,
        display: 'flex',
        flexDirection: `${horizontal ? 'row' : 'column'}`,
        spacing: `${spacing}`,
        marginBottom: `${spacing}`,
        ...rest,
    }
}
