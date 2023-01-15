import pt from 'prop-types'
import * as styles from './SectionTitle.module.scss'

/**
 * The header/title used above different sections.
 */
export function SectionTitle({ children = 'Section Title' }) {
    return (
        <div>
            <h2 className={styles.sectionTitle}>{children}</h2>
        </div>
    )
}

SectionTitle.propTypes = {
    children: pt.string,
}
