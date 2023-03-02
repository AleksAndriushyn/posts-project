import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';
import languageReducer from './language';

const store = configureStore({
	reducer: { user: userReducer, language:languageReducer },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
