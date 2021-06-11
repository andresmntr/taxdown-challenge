import {createStore, combineReducers} from 'redux';
import {SubmissionReducer, FormFieldsReducer} from './reducers';
// import myMiddlewares from './middlewares';
//import { applyMiddleware, compose, createStore, combineReducers } from 'redux';

// dev tool
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const enhancer = composeEnhancers(applyMiddleware(...myMiddlewares));

// reducers
const rootReducer = combineReducers({
  submissions: SubmissionReducer,
  formFields: FormFieldsReducer,
});

const store = createStore(rootReducer); // , enhancer);

export default store;
