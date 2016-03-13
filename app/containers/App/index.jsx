import React, {Component, PropTypes} from 'react'
import { Link } from 'react-router'
import LoadingOrderAnimation from 'react-loading-order-with-animation'

import './styles/app'

export default class App extends Component {
    static propTypes = {
        children: PropTypes.object
    }
    render() {
        const { children } = this.props
        return (
            <div>
                <LoadingOrderAnimation animation="fade-in" move="from-right-to-left" distance={3000} speed={1000} wait={300}>
                    <h1>Header</h1>
                </LoadingOrderAnimation>
                <div>
                    Link: <Link to="/">Home</Link>
                    <Link to="/foo">Foo</Link>
                    <Link to="/bar">Bar</Link>
                    <Link to="/home">Home</Link>
                    <Link to="/list">List</Link>
                </div>
                <LoadingOrderAnimation animation="fade-in" move="from-left-to-right" distance={3000} speed={1000} wait={700}>
                {children}
                </LoadingOrderAnimation>
                <LoadingOrderAnimation animation="fade-in" move="from-right-to-left" distance={3000} speed={1000} wait={300}>
                <h1>Footer</h1>
                </LoadingOrderAnimation>
            </div>
        )
    }
}