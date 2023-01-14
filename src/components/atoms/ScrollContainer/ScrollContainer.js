import pt from 'prop-types'
import * as styles from './ScrollContainer.module.scss'

/**
 * A container that is scrollable horizontal or vertical.
 * Adds spacing to children elements.
 * Pass in any Chakra prop to style, it will affect the parent div (as ...rest)
 * @see https://chakra-ui.com/docs/styled-system/style-props
 */
export function ScrollContainer({ horizontal = true, children }) {
    return (
        <div className={horizontal ? styles.horizontal : styles.vertical}>
            {children}
        </div>
    )
}

ScrollContainer.propTypes = {
    horizontal: pt.bool,
    children: pt.node,
}
