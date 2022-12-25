import {
    Box,
    Card,
    CardFooter,
    CardHeader,
    Heading,
    HStack,
    Text,
} from '@chakra-ui/react'
import { PlatformIcon, Rating } from '../index'

export function GameCard() {
    return (
        <Card
            w={'250px'}
            h={'250px'}
            align="flex-start"
            justify="space-between"
            bgImage={`linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)),url('https://images.gog-statics.com/0aca7f0078df5a2d3d66a3122be6f93b015e98c1d85b0e5a0a8a75b94c748ce2.jpg')`}
            bgPosition={'center'}
            bgSize={'cover'}
            bgRepeat={'no-repeat'}
            color="white"
        >
            <CardHeader p="2" w="inherit">
                <Heading size="md">Card Heading / Title</Heading>
            </CardHeader>
            <CardFooter
                p="2"
                w="inherit"
                display={'flex'}
                justify={'space-between'}
            >
                <Box>
                    <HStack>
                        <PlatformIcon
                            url={
                                'https://images.igdb.com/igdb/image/upload/t_thumb/pl72.jpg'
                            }
                        />
                    </HStack>
                    <Text>12/21/22</Text>
                </Box>
                <Rating value={100} />
            </CardFooter>
        </Card>
    )
}
