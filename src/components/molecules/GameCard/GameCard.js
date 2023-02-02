import pt from 'prop-types'
import { constructImgURL, unixToHumanDate } from '../../../utils'
import { Rating } from '../../atoms'
import * as styles from './GameCard.module.scss'
import { useMemo } from 'react'

/**
 * Displays game information in square card.
 */
export function GameCard({
    imageId,
    summary = 'Missing summary data',
    rating,
    gameTitle = 'Omega Long Game Title',
    releaseDate = 'N/A',
}) {
    const releaseDateText = useMemo(
        () =>
            typeof releaseDate === 'number'
                ? unixToHumanDate(releaseDate)
                : releaseDate,
        [releaseDate]
    )
    const ratingText = useMemo(
        () => (typeof rating === 'number' ? Math.round(rating) : rating),
        [rating]
    )
    const { ratingStyle, sideBarStyle } = useMemo(() => {
        if (typeof ratingText !== 'number')
            return {
                ratingStyle: styles.noRating,
                sideBarStyle: styles.sideBarNoRating,
            }

        switch (true) {
            case ratingText >= 75:
                return {
                    ratingStyle: styles.highRating,
                    sideBarStyle: styles.sideBarHigh,
                }
            case ratingText >= 50:
                return {
                    ratingStyle: styles.midRating,
                    sideBarStyle: styles.sideBarMid,
                }
            default:
                return {
                    ratingStyle: styles.lowRating,
                    sideBarStyle: styles.sideBarLow,
                }
        }
    }, [rating])

    return (
        <div
            data-testid="game-card"
            className={`${styles.gameCard} ${sideBarStyle}`}
        >
            <div className={styles.gameImgContainer}>
                <img
                    src={constructImgURL(imageId)}
                    alt={`Cover art for ${gameTitle}`}
                />
            </div>
            <div className={styles.gameCardHead}>
                <Rating ratingText={ratingText} bgColor={ratingStyle} />
                <div className={styles.headText}>
                    <p className={styles.title}>{gameTitle}</p>
                    <p className={styles.date}>
                        Release Date: {releaseDateText}
                    </p>
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
    releaseDate: pt.oneOfType([pt.string, pt.number]),
}
