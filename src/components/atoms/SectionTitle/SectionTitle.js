import pt from 'prop-types'

/**
 * The header/title used above different sections.
 */
export function SectionTitle({ children = 'Section Title' }) {
    return <p style={styling}>{children}</p>
}

SectionTitle.propTypes = {
    children: pt.string,
}

const styling = {
    fontSize: '2.5rem',
    fontWeight: '600',
}
