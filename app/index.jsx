require('main')

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Hello extends Component {
    shouldComponentUpdate() {
        return false
    }
    render() {
        return <h1>Hello World from React</h1>
    }
}

ReactDOM.render(<Hello />, document.getElementById('root'))