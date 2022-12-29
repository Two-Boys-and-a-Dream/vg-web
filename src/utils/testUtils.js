import { render } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'

/**
 * A react-query wrapped test renderer.
 * @param {React.Element} ui Component to render
 * @returns Standard return value of {render} from '@testing-library/react'
 */
export function renderWithClient(ui) {
    const client = new QueryClient()
    const { rerender, ...result } = render(
        <QueryClientProvider client={client}>{ui}</QueryClientProvider>
    )
    return {
        ...result,
        rerender: (rerenderUi) =>
            rerender(
                <QueryClientProvider client={client}>
                    {rerenderUi}
                </QueryClientProvider>
            ),
    }
}
