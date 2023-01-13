import { SIZES } from '../../../constants'
import pt from 'prop-types'

export function PageWrapper({ children }) {
    return <div style={styling}>{children}</div>
}

PageWrapper.propTypes = {
    children: pt.node,
}

const styling = {
    width: `calc(100% - ${SIZES.navbarWidth}`,
    marginLeft: `${SIZES.navbarWidth}`,
    padding: `${SIZES.pagePadding}`,
}
