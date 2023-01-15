import { ScrollSection } from '../../molecules'
import { GamesContainer } from '../GamesContainer/GamesContainer'
import pt from 'prop-types'

/**
 * Wraps the GamesContainer data, styles layout for limited sized scrolling section.
 * Provide queryName to hook into a query key.
 * @see {@link queries.js}
 */
export function ScrollCategory({ title = 'Games', linkPath, queryName }) {
    return (
        <ScrollSection title={title} linkPath={linkPath}>
            <GamesContainer queryName={queryName} />
        </ScrollSection>
    )
}

ScrollCategory.propTypes = {
    title: pt.string,
    linkPath: pt.string,
    queryName: pt.string,
}
