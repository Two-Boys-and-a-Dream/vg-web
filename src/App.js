import { ChakraProvider } from '@chakra-ui/react'
import { router } from './routes/Router'
import { RouterProvider } from '@tanstack/react-router'
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
                <RouterProvider router={router} />
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </ChakraProvider>
    )
}
