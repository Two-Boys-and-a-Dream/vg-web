import pt from 'prop-types'
import { useMemo } from 'react'
import * as styles from './Rating.module.scss'

export function Rating({ value = '?', bgColor = '.noRating' }) {
    const text = useMemo(
        () => (typeof value === 'number' ? Math.round(value) : value),
        [value]
    )

    return (
        <div className={`${styles.rating} ${bgColor}`}>
            <p>{text}</p>
        </div>
    )
}

Rating.propTypes = {
    value: pt.oneOfType([pt.string, pt.number]),
    bgColor: pt.string,
}
