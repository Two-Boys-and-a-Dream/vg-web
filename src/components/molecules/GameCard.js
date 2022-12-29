import pt from 'prop-types'
import {
    Card,
    CardFooter,
    CardHeader,
    Flex,
    Heading,
    HStack,
    Text,
} from '@chakra-ui/react'
import { PlatformIcon, Rating } from '../index'

/**
 * Displays game information in square card.
 */
export function GameCard({
    // gameImgUrl = 'https://images.igdb.com/igdb/image/upload/t_cover_big/57339.jpg',
    gameImgUrl = 'https://images.gog-statics.com/0aca7f0078df5a2d3d66a3122be6f93b015e98c1d85b0e5a0a8a75b94c748ce2.jpg',
    platformIcons = [
        'https://images.igdb.com/igdb/image/upload/t_thumb/pl72.jpg',
    ],
    ratingValue = '93',
    gameTitle = 'Omega Long Game Title',
    releaseDate = '12/22/22',
}) {
    return (
        <Card
            data-testid="game-card"
            minW={'250px'}
            minH={'250px'}
            align="flex-start"
            justify="space-between"
            bgImage={`
                linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)),
                url(${gameImgUrl})
                `}
            bgPosition={'center'}
            bgSize={'cover'}
            bgRepeat={'no-repeat'}
            color="white"
        >
            <CardHeader p="2">
                <Heading size="md">{gameTitle}</Heading>
            </CardHeader>

            <CardFooter p="2" w="100%">
                <Flex justify="space-between" w="100%">
                    <Flex direction="column">
                        <HStack>
                            {platformIcons.map((platformUrl, index) => (
                                <PlatformIcon
                                    key={`platform-icon - ${index}`}
                                    url={platformUrl}
                                />
                            ))}
                        </HStack>
                        <Text>{releaseDate}</Text>
                    </Flex>

                    <Rating value={ratingValue} />
                </Flex>
            </CardFooter>
        </Card>
    )
}

GameCard.propTypes = {
    gameImgUrl: pt.string,
    platformIcons: pt.arrayOf(pt.string),
    ratingValue: pt.oneOfType([pt.string, pt.number]),
    gameTitle: pt.string,
    releaseDate: pt.string,
}
