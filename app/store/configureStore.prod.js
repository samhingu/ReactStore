import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from 'reducers'

export default function configureStore(initialState) {

    const middleware = applyMiddleware(thunkMiddleware)
    const finalCreateStore = compose(middleware)(createStore)

    const store = finalCreateStore(rootReducer, initialState)

    return store
}