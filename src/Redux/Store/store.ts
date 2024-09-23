import {combineReducers, configureStore} from '@reduxjs/toolkit';
import authSlice from '../Reducer/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const authReducer = persistReducer(persistConfig, authSlice);

const rootReducer: any = combineReducers({
  auth: authReducer,
});
const store = configureStore({
  reducer: rootReducer,
});

const persistor = persistStore(store);

export {store, persistor};
