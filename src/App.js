import { ChakraProvider } from '@chakra-ui/react'
import { Router } from './routes/Router'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

// 24 hours in milliseconds
const oneDayMS = 1000 * 60 * 60 * 24

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: oneDayMS,
            cacheTime: oneDayMS,
        },
    },
})

export function App() {
    return (
        <ChakraProvider>
            <QueryClientProvider client={queryClient}>
                <Router />
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </ChakraProvider>
    )
}
