import pt from 'prop-types'
import * as styles from './Button.module.scss'

export function Button({ onClick, disabled, children, ...rest }) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${styles.container} ${disabled && styles.disabled}`}
            {...rest}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    onClick: pt.func.isRequired,
    disabled: pt.bool,
    children: pt.node,
}
