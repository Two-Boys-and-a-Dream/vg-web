import { GamesContainer, SectionTitle } from '../../components'
import * as styles from './GamesPage.module.scss'
import pt from 'prop-types'

/**
 * Wraps the GamesContainer data, styles the layout for a full page scrolling experience.
 * Provide queryName to hook into a query key.
 * @see {@link queries.js}
 */
export function GamesPage({ title = 'Missing Page Title', queryName }) {
    return (
        <div className={styles.gamePage}>
            <SectionTitle>{title}</SectionTitle>
            <GamesContainer queryName={queryName} />
        </div>
    )
}

GamesPage.propTypes = {
    title: pt.string,
    queryName: pt.string,
}
