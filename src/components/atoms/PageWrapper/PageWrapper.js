import * as styles from './PageWrapper.module.scss'
import pt from 'prop-types'

export function PageWrapper({ children }) {
    return <div className={styles.wrapper}>{children}</div>
}

PageWrapper.propTypes = {
    children: pt.node,
}
