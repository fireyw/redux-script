//npm init -y
//npm i redux
//npm i redux-logger //middle ware
const redux = require('redux');
const reduxLogger = require('redux-logger');
const createStore = redux.createStore;
const applyMidderware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();
const combineReducers = redux.combineReducers;
//actions
//action-types
const ADD_SUBSCRIBER = 'ADD_SUBSCRIBER'
const ADD_VIEWCOUNT = 'ADD_VIEWCOUNT'

const addSubscriber = () => {
    return {
        type: ADD_SUBSCRIBER
    }
}
const addViewCounter = () => {
    return {
        type: ADD_VIEWCOUNT
    }
}


//reducers
const subscriberState = {
    subsribers: 365
}
const subscireberReducer = (state = subscriberState, action) => {
    switch (action.type) {
        case ADD_SUBSCRIBER:
            return {
                ...state,
                subsribers: state.subsribers + 1
            }
        default:
            return state;
    }
}

const viewState = {
    viewCount: 100
}
const viewReducer = (state = viewState, action) => {
    switch (action.type) {
        case ADD_VIEWCOUNT:
            return {
                ...state,
                viewCount: state.viewCount + 1
            }
        default:
            return state;
    }
}
//2개 이상 reducer 사용
const rootReducer = combineReducers({
    view: viewReducer,
    subscriber: subscireberReducer,
})

//store
const store = createStore(rootReducer, applyMidderware(logger));

//subscribe - view - dispatch

// store.subscribe(()=>{
//     console.log('subscribe==>', store.getState())
// })
store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addViewCounter());
store.dispatch(addViewCounter());
