import ReactDOM from 'react-dom/client'
import Router from './pages/Router'

const rootElement = document.getElementById('app')
if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement)
    root.render(<Router />)
}
