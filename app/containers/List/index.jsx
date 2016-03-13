import React, {Component} from 'react'
import { connect } from 'react-redux'
import * as UrlActions from 'actions/urls'
import { bindActionCreators }  from 'redux'

class List extends Component {
    handleAddUrlClick() {
        this.props.addUrl('Test Title')
    }
    render() {
        return (
            <div>
                <h1>Hello World from List</h1>
                <button onClick={this.handleAddUrlClick.bind(this)}>Add Url</button>
                {this.props.urls.map(url => <li key={url.rating}>{url.title}</li>)}
            </div>
        )
    }
}

export default connect(
    state => state.urls,
    dispatch => bindActionCreators(UrlActions, dispatch)
)(List)
