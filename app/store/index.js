import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import courseReducer from './courses';

const reducer = combineReducers({
  courses: courseReducer
});

const middleware = applyMiddleware(thunkMiddleware);

const store = createStore(reducer, middleware);
export default store;
