import React, {Component} from 'react'
import { Link } from 'react-router'


import './styles/app'

export default class App extends Component {
    render() {
        return (
            <div>
                    <h1>Header</h1>
                <div>
                    Link: <Link to="/">Home</Link>
                    <Link to="/foo">Foo</Link>
                    <Link to="/bar">Bar</Link>
                    <Link to="/home">Home</Link>
                    <Link to="/list">List</Link>
                </div>
                {this.props.children}
                    <h1>Footer</h1>
            </div>
        )
    }
}