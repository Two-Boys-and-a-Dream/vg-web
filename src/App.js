import { router } from './routes/Router'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { RouterProvider } from 'react-router-dom'

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
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}
