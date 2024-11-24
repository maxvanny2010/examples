import { ERROR, FIELDS, PAGE, REQUEST, URL } from '../../constants';

export const fetchNewRecord = async (record) => {
	const { date, username, phone, question } = record;
	const bodyData = {};
	if (date !== undefined) bodyData[FIELDS.DATE] = date;
	if (username !== undefined) bodyData[FIELDS.USERNAME] = username;
	if (phone !== undefined) bodyData[FIELDS.PHONE] = phone;
	if (question !== undefined && question.trim() !== '')
		bodyData[FIELDS.QUESTION] = question;
	const path = `${URL}${PAGE.RECORDS}`;
	const response = await fetch(path,
		{
			method: REQUEST.POST,
			headers: { 'Content-Type': 'application/json;charset=UTF-8' },
			body: JSON.stringify(bodyData),
		});
	if (!response.ok) {
		throw new Error(`${ERROR.SERVER_FAILED}`);
	}
	return response.json();
};
