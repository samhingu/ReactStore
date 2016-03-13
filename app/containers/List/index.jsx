import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators }  from 'redux'

import * as UrlActions from 'actions/urls'

class List extends Component {
    static propTypes = {
        addUrl: PropTypes.func,
        urls: PropTypes.array
    }
    handleAddUrlClick() {
        const {addUrl} = this.props
        addUrl('Test Title')
    }
    render() {
        const { urls } = this.props
        return (
            <div>
                <h1>Hello World from List</h1>
                <button onClick={this.handleAddUrlClick.bind(this)}>Add Url</button>
                {urls.map(url => <li key={url.rating}>{url.title}</li>)}
            </div >
        )
    }
}

export default connect(
    state => state.urls,
    dispatch => bindActionCreators(UrlActions, dispatch)
)(List)
