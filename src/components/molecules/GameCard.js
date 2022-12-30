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
import { constructImgURL } from '../../utils'
import { IMAGE_SIZES } from '../../utils/images'

/**
 * Displays game information in square card.
 */
export function GameCard({
    imageId,
    platformIds = [],
    rating,
    gameTitle = 'Omega Long Game Title',
    releaseDate = '12/22/22',
}) {
    return (
        <Card
            data-testid="game-card"
            minW="250px"
            minH="250px"
            align="flex-start"
            justify="space-between"
            bgImage={`
                linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.15)),
                url(${constructImgURL(imageId)})
                `}
            bgPosition="center"
            bgSize="cover"
            bgRepeat="no-repeat"
            color="white"
            // Only added temporarily to hide platform icons that flow over edge
            overflow="hidden"
        >
            <CardHeader p="2">
                <Heading size="md">{gameTitle}</Heading>
            </CardHeader>

            <CardFooter p="2" w="100%">
                <Flex justify="space-between" align="flex-end" w="100%">
                    <Flex direction="column">
                        <HStack>
                            {platformIds.map((pId, index) => (
                                <PlatformIcon
                                    key={`platform-icon - ${index}`}
                                    url={constructImgURL(
                                        pId,
                                        IMAGE_SIZES.thumb
                                    )}
                                />
                            ))}
                        </HStack>
                        <Text>{releaseDate}</Text>
                    </Flex>

                    <Rating value={rating} />
                </Flex>
            </CardFooter>
        </Card>
    )
}

GameCard.propTypes = {
    imageId: pt.string.isRequired,
    platformIds: pt.arrayOf(pt.string),
    rating: pt.oneOfType([pt.string, pt.number]),
    gameTitle: pt.string,
    releaseDate: pt.string,
}
