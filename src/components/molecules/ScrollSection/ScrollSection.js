import { Link } from 'react-router-dom'
import { ScrollContainer, SectionTitle } from '../../atoms'
import pt from 'prop-types'
import styles from './ScrollSection.module.scss'

/**
 * Combines the horizontal scroll container, and the title/link above it.
 * Provide linkPath to render optional link.
 */
export function ScrollSection({
    title = 'Default Title',
    linkPath,
    linkText = 'See All',
    children,
}) {
    return (
        <div className={styles.container}>
            <div>
                <SectionTitle>{title}</SectionTitle>
                {linkPath ? <Link to={linkPath}>{linkText}</Link> : null}
            </div>

            <ScrollContainer>{children}</ScrollContainer>
        </div>
    )
}

ScrollSection.propTypes = {
    title: pt.string,
    children: pt.node,
    linkPath: pt.string,
    linkText: pt.string,
}
