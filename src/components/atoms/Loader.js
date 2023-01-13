import styles from './sass/Loading.module.sass'

/**
 * A centered loading spinner.
 */
export function Loader() {
    return (
        <div className={styles.loadingContainer}>
            <div className={styles.loadingCircle}>
                <div className={styles.loadingCircleInner}></div>
            </div>
        </div>
    )
}
