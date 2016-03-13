import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'containers/App'
import Home from 'components/Home'
import Foo from 'components/Foo'

export default (
    <Route path="/" Component={App}>
        <IndexRoute Component={Foo} />
        <Route path="home"  Component={Home} />
        <Route status={404} path="*" component={Home} />
    </Route>
)