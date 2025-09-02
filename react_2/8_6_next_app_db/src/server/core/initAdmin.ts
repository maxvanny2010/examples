import { checkIfAdminExists, ensureAdminExists } from './seedAdmin';
import { MESSAGES } from '@/shared/util';

let adminInitialized = false;

export async function initAdminOnce() {
	if (adminInitialized) return;
	adminInitialized = true;

	try {
		const adminExists = await checkIfAdminExists();
		if (!adminExists) {
			await ensureAdminExists();
			console.log(MESSAGES.ADMIN_CREATED);
		} else {
			console.log(MESSAGES.ADMIN_EXIST);
		}
	} catch (err) {
		console.error(MESSAGES.ADMIN_FAILED, err);
	}
}