import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './containers/App'
import HomePage from './components/HomePage'

export default (
    <Router>
        <Route path='/' component={App}>
            <Route component={HomePage} />
        </Route>
    </Router>
)