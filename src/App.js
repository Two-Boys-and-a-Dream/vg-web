import { ChakraProvider } from '@chakra-ui/react'
import './App.module.css'
import { router } from './routes/Router'
import { RouterProvider } from '@tanstack/react-router'

export function App() {
    return (
        <ChakraProvider>
            <RouterProvider router={router} />
        </ChakraProvider>
    )
}
