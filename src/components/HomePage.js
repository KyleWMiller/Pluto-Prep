import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => (
    <div className='jumbotron center'>
        <h1>Welcome to Media Library build with React, Redux, and Redux-saga </h1>
        <div>
            <Link to='Library'>
                <button className='btn btn-large btn-primary'>Home</button>
            </Link>
        </div>
    </div>
)

export default HomePage
