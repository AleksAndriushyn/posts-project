import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const language = JSON.parse(localStorage.getItem('language') ?? 'null');

const initialState = { language };

const languageSlice = createSlice({
	name: 'language',
	initialState,
	reducers: {
		setLanguage: (state, action: PayloadAction<any>) => {
			state.language = action.payload;
			localStorage.setItem('language', JSON.stringify(action.payload));
		},
	},
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
