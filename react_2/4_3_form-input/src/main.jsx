import ReactDOM from 'react-dom/client';
import { CustomInputs } from './CustomInputs.jsx';
import { MultiInputs } from './MultiInputs.jsx';
import { ControlInputs } from './ControlInputs.jsx';
import { NotControlInputsRef } from './NotControlInputsRef.jsx';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<>
		<CustomInputs />
		<MultiInputs />
		<ControlInputs />
		<NotControlInputsRef />
	</>,
);
