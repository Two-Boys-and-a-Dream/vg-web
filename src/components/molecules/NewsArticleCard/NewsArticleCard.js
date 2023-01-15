import pt from 'prop-types'
import styles from './NewsArticleCard.module.scss'

export function NewsArticleCard({
    title = 'We gotta save John Wic from Fortnite',
    thumbnail = 'https://images.gog-statics.com/0aca7f0078df5a2d3d66a3122be6f93b015e98c1d85b0e5a0a8a75b94c748ce2.jpg',
    link,
}) {
    return (
        <a href={link} rel={'external'}>
            <div data-testid="news-article-card" className={styles.newsArticle}>
                <p>{title}</p>
                <img src={thumbnail} alt="missing image" />
            </div>
        </a>
    )
}

NewsArticleCard.propTypes = {
    title: pt.string,
    thumbnail: pt.string,
    link: pt.string,
}
