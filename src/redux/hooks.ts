import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store';

export const useUserDispatch = () => useDispatch<AppDispatch>();
export const useUserSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useLanguageDispatch = () => useDispatch<AppDispatch>();
export const useLanguageSelector: TypedUseSelectorHook<RootState> = useSelector;
