import pt from 'prop-types'
import styles from './NewsArticleCard.module.scss'

export function NewsArticleCard({
    title = 'We gotta save John Wic from Fortnite',
    image = 'https://images.gog-statics.com/0aca7f0078df5a2d3d66a3122be6f93b015e98c1d85b0e5a0a8a75b94c748ce2.jpg',
    description,
    date,
    link,
}) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className={styles.newsArticle}
            data-testid="news-article-card"
        >
            <div>
                <img src={image} alt="missing image" />
            </div>

            <div>
                <p className={styles.title}>{title}</p>
                <p className={styles.date}>Date: {date}</p>
                <p className={styles.description}>{description}</p>
            </div>
        </a>
    )
}

NewsArticleCard.propTypes = {
    title: pt.string,
    image: pt.string,
    description: pt.string,
    date: pt.string,
    link: pt.string,
}
