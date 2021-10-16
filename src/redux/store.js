import { combineReducers, createStore } from 'redux';
import loginReducer from './loginReducer';
import dataReducer from './dataReducer';

// 1
const allReducer = combineReducers({
    loginRedux: loginReducer, dataReducer
})

const store = createStore(
    // 2
    allReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store