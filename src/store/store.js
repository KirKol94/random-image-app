import { combineReducers, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import postsReducer from './reducers/postsReducer'; // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  postsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
