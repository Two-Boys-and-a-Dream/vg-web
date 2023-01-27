import * as styles from './Hero.module.scss'

export function Hero() {
    return (
        <div className={styles.container}>
            <p className={styles.mainText}>Video Game</p>
            <p className={styles.bold}>Central</p>
        </div>
    )
}
