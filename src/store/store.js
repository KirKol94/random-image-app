import { combineReducers, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import notesReducer from './reducers/notesReducer';
import searchReducer from './reducers/searchReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  notes: notesReducer,
  search: searchReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
