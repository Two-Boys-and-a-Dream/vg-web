import pt from 'prop-types'
import { constructImgURL } from '../../../utils'
import { Rating } from '../../atoms'
import styles from './GameCard.module.scss'

/**
 * Displays game information in square card.
 */
export function GameCard({
    imageId,
    summary = 'Missing summary data',
    rating,
    gameTitle = 'Omega Long Game Title',
    releaseDate = '12/22/22',
}) {
    return (
        <div data-testid="game-card" className={styles.container}>
            <img
                src={constructImgURL(imageId)}
                alt={`Cover art for ${gameTitle}`}
            />
            <div className={styles.column}>
                <Rating value={rating} />
                <div>
                    <h2>{gameTitle}</h2>
                    <p>{releaseDate}</p>
                </div>
            </div>
            <p className={styles.summary}>{summary}</p>
        </div>
    )
}

GameCard.propTypes = {
    imageId: pt.string,
    summary: pt.string,
    rating: pt.oneOfType([pt.string, pt.number]),
    gameTitle: pt.string,
    releaseDate: pt.string,
}
