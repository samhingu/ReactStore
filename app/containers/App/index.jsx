import React from 'react'
import { Link } from 'react-router'

import './styles/app'

export default function App({ children }) {
    return (
        <div>
            <h2>Header</h2>
            <div>
            Link : <Link to="/">Home</Link>
            <Link to="/foo">foo</Link>
            <Link to="/bar">bar</Link>
            </div>
            <div >{children}</div>
            <h2>Footer</h2>
        </div>
    )
}