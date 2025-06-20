import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ContactDto, GroupContactsDto } from 'types/dto';

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: '/' }),
	tagTypes: ['Contacts', 'Groups', 'Favorites'],
	endpoints: (builder) => ({
		getContacts: builder.query<ContactDto[], void>({
			query: () => 'contacts.json',
			providesTags: ['Contacts'],
		}),
		getGroups: builder.query<GroupContactsDto[], void>({
			query: () => 'group-contacts.json',
			providesTags: ['Groups'],
		}),
	}),
});

export const {
	useGetContactsQuery,
	useGetGroupsQuery,
} = apiSlice;
