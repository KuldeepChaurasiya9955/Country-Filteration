import {createRoot} from 'react-dom/client'
import App from './App'

console.log(createRoot);
const root = createRoot(document.getElementById('root'))

root.render(<App />)