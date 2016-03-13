import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import rootReducer from 'reducers'

export default function configureStore(initialState) {
    const logger = createLogger()

    const middleware = applyMiddleware(thunkMiddleware, logger)
    const finalCreateStore = compose(
        middleware,
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )(createStore)

    const store = finalCreateStore(rootReducer, initialState)

    return store
}