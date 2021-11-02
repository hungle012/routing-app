import {combineReducers, createStore} from 'redux'
import { FakeBookReducer } from './reducers/FakeBookReducer';

const rootReducer = combineReducers({
    // Nơi khái báo các state của ứng dụng
    FakeBookReducer,
});

export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());