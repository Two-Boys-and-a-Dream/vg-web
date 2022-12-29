import { Card, Text, Image } from '@chakra-ui/react'
import pt from 'prop-types'

export function NewsArticleCard({
    newsOutlet = 'John Kotaku',
    title = 'We gotta save John Wic from Fortnite',
    thumbnail = 'https://images.gog-statics.com/0aca7f0078df5a2d3d66a3122be6f93b015e98c1d85b0e5a0a8a75b94c748ce2.jpg',
}) {
    return (
        <Card data-testid="news-article-card">
            <Text>{newsOutlet}</Text>
            <Text>{title}</Text>
            <Image
                src={thumbnail}
                alt="missing image"
                w="250px"
                h="125px"
                align="center"
                fit="cover"
            />
        </Card>
    )
}

NewsArticleCard.propTypes = {
    newsOutlet: pt.string,
    title: pt.string,
    thumbnail: pt.string,
}
