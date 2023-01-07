import pt from 'prop-types'
import { Card, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import { constructImgURL } from '../../utils'
import { Rating } from '../atoms'

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
        // Setting width not working as intended.
        // For some reason it only works with minW
        <Card
            data-testid="game-card"
            color="white"
            minW="325px"
            maxW="325px"
            gap="2"
            bg="black"
            p="2"
        >
            <Image src={constructImgURL(imageId)} w="100%" h="200px" />
            <HStack>
                <Rating value={rating} />
                <VStack align="flex-start">
                    <Heading
                        w="225px"
                        size="md"
                        whiteSpace="nowrap"
                        overflow="hidden"
                        textOverflow="ellipsis"
                    >
                        {gameTitle}
                    </Heading>
                    <Text>{releaseDate}</Text>
                </VStack>
            </HStack>
            <Text
                h="100px"
                whiteSpace="normal"
                overflow="hidden"
                textOverflow="ellipsis"
            >
                {summary}
            </Text>
        </Card>
    )
}

GameCard.propTypes = {
    imageId: pt.string,
    summary: pt.string,
    rating: pt.oneOfType([pt.string, pt.number]),
    gameTitle: pt.string,
    releaseDate: pt.string,
}
