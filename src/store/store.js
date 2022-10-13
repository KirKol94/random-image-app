import { combineReducers, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import likesReducer from './reducers/likesReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  likesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
