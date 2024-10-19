import './App.css';
import React from 'react';
import { EffectMockJsonServer } from './components/mock_json-server/EffectMockJsonServer.jsx';
import {
	EffectMockJsonServerCustomHook,
} from './components/mock_json-server_custom-hook/EffectMockJsonServerCustomHook.jsx';
import { EffectJsonPlaceholder } from './components/json_placeholder/EffectJsonPlaceholder.jsx';
import { EffectFirebase } from './components/firebase/EffectFirebase.jsx';

export default function App() {

	return (
		<>
			<table>
				{/*<EffectMockBackEnd />*/}
				<tbody>
				<tr>
					<td>
						<EffectMockJsonServer />
					</td>
					<td>
						<EffectMockJsonServerCustomHook />
					</td>
				</tr>
				<tr>
					<td>
						<EffectJsonPlaceholder />
					</td>
					<td>
						<EffectFirebase />
					</td>
				</tr>
				</tbody>
			</table>
		</>
	);
};



