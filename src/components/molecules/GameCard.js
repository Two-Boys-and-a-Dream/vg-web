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
        <Card
            data-testid="game-card"
            color="white"
            minW="400px"
            maxW="400px"
            gap="2"
            bg="#262626"
            p="3"
        >
            <Image
                src={constructImgURL(imageId)}
                w="100%"
                h="200px"
                borderRadius="4px"
            />
            <HStack>
                <Rating value={rating} />
                <VStack align="flex-start">
                    <Heading
                        size="md"
                        whiteSpace="nowrap"
                        overflow="clip"
                        textOverflow="ellipsis"
                        w="325px"
                    >
                        {gameTitle}
                    </Heading>
                    <Text fontSize="sm">{releaseDate}</Text>
                </VStack>
            </HStack>
            <Text h="100px" overflow="hidden" textOverflow="ellipsis">
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
