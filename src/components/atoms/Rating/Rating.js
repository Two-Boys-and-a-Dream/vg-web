import pt from 'prop-types'
import * as styles from './Rating.module.scss'

export function Rating({ ratingText = '?', bgColor = '.noRating' }) {
    return (
        <div className={`${styles.rating} ${bgColor}`}>
            <p>{ratingText}</p>
        </div>
    )
}

Rating.propTypes = {
    ratingText: pt.oneOfType([pt.string, pt.number]),
    bgColor: pt.string,
}
