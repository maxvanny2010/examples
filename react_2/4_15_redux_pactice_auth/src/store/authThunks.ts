import { createAsyncThunk } from '@reduxjs/toolkit';
import { setAccessToken } from './authSlice';
import axiosPublic from '../api/axiosPublic';

export const login = createAsyncThunk(
	'auth/login',
	async ({ email, password }: { email: string; password: string }, thunkAPI) => {
		const res = await axiosPublic.post(
			'/login',
			{ email, password },
			{ withCredentials: true },
		);
		console.log(res.data.accessToken);
		thunkAPI.dispatch(setAccessToken(res.data.accessToken));
	},
);
