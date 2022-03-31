import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
// import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";

const store = createStore(
	rootReducer,
	applyMiddleware(logger, thunk)
	// composeWithDevTools(applyMiddleware(logger))
	// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
