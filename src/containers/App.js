import React from 'react'
import PropTypes from 'prop-types'

import Header from '../common/Header'
import { applyMiddleware } from 'redux'

const App = ({ children }) => {
    return (
        <div className='container-fluid text-center'>
            <Header />
            {children}
        </div>
    )
}
App.propTypes = {
    children: PropTypes.object.isRequired
}

export default App