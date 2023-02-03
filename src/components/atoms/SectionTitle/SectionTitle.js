import pt from 'prop-types'
import * as styles from './SectionTitle.module.scss'

/**
 * The header/title used above different sections.
 */
export function SectionTitle({ children = 'Section Title', ...rest }) {
    return (
        <h2 className={styles.sectionTitle} {...rest}>
            {children}
        </h2>
    )
}

SectionTitle.propTypes = {
    children: pt.string,
}
