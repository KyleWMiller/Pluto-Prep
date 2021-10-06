import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import routes from './routes'
import App from './containers/App'

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
)