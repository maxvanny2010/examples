import style from './User.module.css';
import app from '../../App.module.css';
import '../../index.css';
import { Label } from './label/Label.jsx';
import { Contacts } from './contacts/Contacts.jsx';

export const User = props => {
	const { name, age, ...contacts } = props;

	return (
		<div className={`${app.block} ${style.color}`}>
			<Label color="blue">InnerComponent_1_1</Label>
			<div>Имя: {name}</div>
			<div>Возраст: {age}</div>
			<hr className={app.hr} />
			<Contacts {...contacts} />
		</div>
	);
};

