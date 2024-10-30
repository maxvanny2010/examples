import { ButtonDelete } from '../buttons/delete/ButtonDelete.jsx';
import { ButtonUpdate } from '../buttons/update/ButtonUpdate.jsx';
import { CheckboxCompleted } from '../checkbox/CheckboxCompleted.jsx';
import { TaskComponent } from '../task/TaskComponent.jsx';
import PropTypes from 'prop-types';

export const TodoRow = ({ todo }) => {
	return (
		<>
			<td><CheckboxCompleted todo={todo} /></td>
			<td><TaskComponent todo={todo} /></td>
			<td><ButtonUpdate todo={todo} /></td>
			<td><ButtonDelete todo={todo} /></td>
		</>
	);
};
TodoRow.propTypes = {
	todo: PropTypes.object.isRequired,
};
