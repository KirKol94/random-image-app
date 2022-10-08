import {combineReducers, createStore} from "redux";
import notesReducer from "./reducers/notesReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
  notes: notesReducer
})

const store = createStore(rootReducer, composeWithDevTools())
export default store;