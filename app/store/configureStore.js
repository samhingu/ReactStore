import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
//import DevTools from 'containers/DevTools'
import rootReducer from 'reducers'

export default function configureStore(initialState) {
    const logger = createLogger({
        collapsed : true,
        level: 'info',
        duration : true
    })
    
    const middleware = applyMiddleware(thunkMiddleware, logger)
    const finalCreateStore = compose(
        middleware,
        //DevTools.instrument()
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )(createStore)

    const store = finalCreateStore(rootReducer, initialState)

    return store
}