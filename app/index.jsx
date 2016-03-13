import React from 'react'
import { Provider } from 'react-redux'
import { Router, IndexRoute, useRouterHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import { createHashHistory } from 'history'
import ReactDOM from 'react-dom'
//import routes from 'routes'
import configureStore from 'store/configureStore'
const history = useRouterHistory(createHashHistory)({ queryKey: false })

const store = configureStore()
const history1 = syncHistoryWithStore(history, store)


import Foo from 'components/Foo'
import Bar from 'components/Bar'
import Home from 'components/Home'
import App from 'containers/App'
import MyList from 'containers/List'

import DevTools from 'containers/DevTools'
import { Route } from 'react-router'

ReactDOM.render(
    <div>
        <Provider store={store}>
            <Router history={history1}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home}/>
                    <Route path="foo" component={Foo}/>
                    <Route path="bar" component={Bar}/>
                    <Route path="home" component={Home}/>
                    <Route path="list" component={MyList}/>
                </Route>
            </Router>
        </Provider>
        <DevTools store={store} />
    </div>, document.getElementById('root'))