import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import { ControlsEmptyValue } from './components/1_input/ControlsEmptyValue';
import { ControlReactInputValue } from './components/1_input/ControlReactInputValue.jsx';
import { InputsSmallForm } from './components/2_inputs/InputsSmallForm.jsx';
import { InputsBigForm } from './components/2_inputs/InputsBigForm.jsx';
import { InputsForStore2 } from './components/3_store-hook/InputsForStore2.jsx';
import { InputsForStore1 } from './components/3_store-hook/InputsForStore1.jsx';
import { SelectSimple } from './components/4_select/SelectSimple.jsx';
import { SelectReact } from './components/5_select-react/SelectReact.jsx';
import { Validation } from './components/6_validation/Validation.jsx';
import { ValidationYup } from './components/7_validation-yup/ValidationYup.jsx';
import { ValidationRef } from './components/8_ref/ValidationRef.jsx';
import { RefCounter } from './components/9_ref-counter/RefCounter.jsx';
import { HookForm } from './components/10_hook-form/HookForm.jsx';
import { HookFormYup } from './components/11_hook-form-yup/HookFormYup.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<ControlsEmptyValue />
		<ControlReactInputValue />
		<InputsSmallForm />
		<InputsBigForm />
		<InputsForStore1 />
		<InputsForStore2 />
		<SelectSimple />
		<SelectReact />
		<Validation />
		<ValidationYup />
		<ValidationRef />
		<RefCounter />
		<HookForm />
		<HookFormYup />

	</React.StrictMode>,
);
