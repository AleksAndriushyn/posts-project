import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types';

const user = JSON.parse(localStorage.getItem('user') ?? 'null');

const initialState = { user };

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<User>) => {
			state.user = action.payload;
			localStorage.setItem('user', JSON.stringify(action.payload));
		},
		clearUser: (state) => {
			state.user = null;
			localStorage.removeItem('user');
		},
	},
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
