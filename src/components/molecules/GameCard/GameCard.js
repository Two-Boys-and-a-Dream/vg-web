import pt from 'prop-types'
import { constructImgURL } from '../../../utils'
import { Rating } from '../../atoms'
import * as styles from './GameCard.module.scss'
import { useMemo } from 'react'

/**
 * Displays game information in square card.
 */
export function GameCard({
    imageId,
    summary = 'Missing summary data',
    rating = '?',
    gameTitle = 'Omega Long Game Title',
    releaseDate = '12/22/22',
}) {
    const ratingColor = useMemo(() => {
        if (typeof rating !== 'number') return styles.noRating

        switch (true) {
            case rating >= 75:
                return styles.highRating
            case rating >= 50:
                return styles.mediumRating
            default:
                return styles.lowRating
        }
    }, [rating])
    const ratingText = useMemo(
        () => (typeof rating === 'number' ? Math.round(rating) : rating),
        [rating]
    )

    return (
        <div data-testid="game-card" className={styles.gameCard}>
            <img
                src={constructImgURL(imageId)}
                alt={`Cover art for ${gameTitle}`}
                className={styles.gameCardCoverImg}
            />
            <div className={styles.gameCardHead}>
                <Rating ratingText={ratingText} bgColor={ratingColor} />
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
