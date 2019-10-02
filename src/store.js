import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension'

//Sagas Middleware
import createSagaMiddleware from 'redux-saga';
//My sagas
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()
//DevToolsExtension
const composeEnhancers = composeWithDevTools({
    realtime: true
})

export let store = createStore(reducers,
    composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(sagas)
