import pt from 'prop-types'
import { useMemo } from 'react'
import * as styles from './Rating.module.scss'

export function Rating({ value = '?' }) {
    const text = useMemo(
        () => (typeof value === 'number' ? Math.round(value) : value),
        [value]
    )

    const bgColor = useMemo(() => {
        if (typeof value !== 'number') return styles.noRating

        switch (true) {
            case value >= 75:
                return styles.highRating
            case value >= 50:
                return styles.mediumRating
            default:
                return styles.lowRating
        }
    }, [value])

    return (
        <div className={`${styles.rating} ${bgColor}`}>
            <p>{text}</p>
        </div>
    )
}

Rating.propTypes = {
    value: pt.oneOfType([pt.string, pt.number]),
}
