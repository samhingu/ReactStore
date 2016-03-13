import React, {Component} from 'react'
import LoadingOrderAnimation from 'react-loading-order-with-animation'

export default class LoadAnimate extends Component {
    render() {
        return (
            <LoadingOrderAnimation animation="fade-in" move="from-right-to-left" distance={30} speed={500} wait={200}>
                {this.props.children}
            </LoadingOrderAnimation>
        )
    }
}