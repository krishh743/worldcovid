import {createStore, applyMiddleware, combineReducers} from 'redux';

import {composeWithDevTools} from 'redux-devtools-extension';

import thunk from 'redux-thunk'
import ApidataReducer from './Reducer/ApidataReducer'



const reducer = combineReducers({
    userData: ApidataReducer,


})
const initialState = {}
// const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)));


export default store;