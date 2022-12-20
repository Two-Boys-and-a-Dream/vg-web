import { ChakraProvider } from '@chakra-ui/react'
import './App.module.css'
import { Router } from './routes'

export function App() {
    return (
        <ChakraProvider>
            <Router />
        </ChakraProvider>
    )
}
