import { State } from '../types/common';
import { ContactDto, FavoriteContactsDto, GroupContactsDto } from '../types/dto';

export interface CommonPageProps {
	contactsState: State<ContactDto[]>,
	favoriteContactsState: State<FavoriteContactsDto>
	groupContactsState: State<GroupContactsDto[]>
}
