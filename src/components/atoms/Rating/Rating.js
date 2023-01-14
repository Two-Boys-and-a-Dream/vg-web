import pt from 'prop-types'
import { useMemo } from 'react'
import * as styles from './Rating.module.scss'

export function Rating({ value = '?' }) {
    const text = useMemo(
        () => (typeof value === 'number' ? Math.round(value) : value),
        [value]
    )

    const bgColor = useMemo(() => {
        if (typeof value !== 'number') return '#7e8aa9'

        switch (true) {
            case value >= 75:
                return '#22c55e'
            case value >= 50:
                return '#f59e0b'
            default:
                return '#ef4444'
        }
    }, [value])

    return (
        <div
            className={styles.container}
            style={{ backgroundColor: `${bgColor}` }}
        >
            <p>{text}</p>
        </div>
    )
}

Rating.propTypes = {
    value: pt.oneOfType([pt.string, pt.number]),
}
