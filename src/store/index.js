import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";




const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const rootReducer = combineReducers({
    // taskModule: taskReducer,
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

window.myStore = store