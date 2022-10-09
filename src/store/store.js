import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import notesReducer from './reducers/notesReducer';
import searchReducer from './reducers/searchReducer';

const rootReducer = combineReducers({
  notes: notesReducer,
  search: searchReducer,
});

const store = createStore(rootReducer, composeWithDevTools());
export default store;
