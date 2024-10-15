import app from '../../../App.module.css';
import { Label } from '../label/Label.jsx';

export const Contacts = ({ email, phone }) => (
	<div className={app.block}>
		<Label color="red">InnerComponent_1_2</Label>
		<div>Почта: {email}</div>
		<div>Телефон: {phone}</div>
	</div>
);

