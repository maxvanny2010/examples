import { flow, makeAutoObservable } from 'mobx';
import { api } from '../api';
import { GroupContactsDto } from '../../types/dto';
import { handleResponse } from '../../types/handleResponse';
import { Response } from '../../types/response';

interface GroupsStoreType {
	data: GroupContactsDto[];
	loading: boolean;
	error: string | null;
	get: () => Promise<void>;
}

export const groupsStore = makeAutoObservable<GroupsStoreType>({
	data: [] as GroupContactsDto[],
	loading: false,
	error: null,

	get: flow(function* (this: GroupsStoreType) {
		this.loading = true;
		this.error = null;

		const result: Response<GroupContactsDto[]> = yield api.getGroups();

		handleResponse(
			result,
			(data) => {
				this.data = data;
			},
			(error) => {
				this.error = error || 'Ошибка загрузки данных групп';
			},
		);

		this.loading = false;
	}),
});
