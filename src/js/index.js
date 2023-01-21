import {createRoot} from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"

import App from './app'

const container = document.querySelector("#root")
const root = createRoot(container)
root.render(<App/>)