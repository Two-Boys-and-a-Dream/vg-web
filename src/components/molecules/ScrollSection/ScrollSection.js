import { ScrollContainer, SectionTitle } from '../../atoms'
import pt from 'prop-types'
import styles from './ScrollSection.module.scss'

/**
 * Combines the horizontal scroll container, and the title/link above it.
 * Provide linkPath to render optional link.
 */
export function ScrollSection({ title = 'Default Title', children }) {
    return (
        <div className={styles.scrollSection}>
            <SectionTitle>{title}</SectionTitle>

            <ScrollContainer>{children}</ScrollContainer>
        </div>
    )
}

ScrollSection.propTypes = {
    title: pt.string,
    children: pt.node,
}
