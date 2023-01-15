import pt from 'prop-types'
import * as styles from './ScrollContainer.module.scss'

/**
 * A container that is scrollable horizontal or vertical.
 * Adds spacing to children elements.
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
