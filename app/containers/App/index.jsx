import React, {Component} from 'react'
import { Link } from 'react-router'


import './styles/app'
import 'style!css!../../../semantic/dist/semantic.css'


export default class App extends Component {
    render() {
        return (
            <div>
                <div className="ui fixed inverted menu">
                    <div className="ui container">
                        <Link to="/" className="header item">
                            <img className="logo" src="./logo.svg" />
                            React Store
                        </Link>
                        <Link className="item" to="/foo">Foo</Link>
                        <Link className="item" to="/bar">Bar</Link>
                        <Link className="item" to="/home">Home</Link>
                        <Link className="item" to="/list">List</Link>
                    </div>
                </div>
                <div className="ui main container">
                    {this.props.children}
                </div>
                <div className="ui inverted vertical footer segment">
                    <div className="ui center aligned container">
                        <div className="ui inverted section divider"></div>
                        <img src="logo.svg" className="ui centered mini image" />
                        <div className="ui horizontal inverted small divided link list">
                            <a className="item" href="#">Copyright @ React Store Inc.</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}