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
    rating,
    gameTitle = 'Omega Long Game Title',
    releaseDate = '12/22/22',
}) {
    const { ratingStyle, sideBarStyle } = useMemo(() => {
        if (typeof rating !== 'number')
            return {
                ratingStyle: styles.noRating,
                sideBarStyle: styles.sideBarNoRating,
            }

        switch (true) {
            case rating >= 75:
                return {
                    ratingStyle: styles.highRating,
                    sideBarStyle: styles.sideBarHigh,
                }
            case rating >= 50:
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
    const ratingText = useMemo(
        () => (typeof rating === 'number' ? Math.round(rating) : rating),
        [rating]
    )

    const SUMMARY_LENGTH = 275

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
                    <h2>{gameTitle}</h2>
                    <p>{releaseDate}</p>
                </div>
            </div>
            <p className={styles.summary}>
                {summary.length >= SUMMARY_LENGTH
                    ? summary.slice(0, SUMMARY_LENGTH) + ' [...]'
                    : summary}
            </p>
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
