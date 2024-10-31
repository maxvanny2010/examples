import './App.css';
import { CallbackComponent } from './component/callback/CallbackComponent.jsx';
import { MemoComponent } from './component/memo/MemoComponent.jsx';
import { Expensive } from './component/memo-callback/Expensive.jsx';
import { UserWidget } from './component/render-props/UserWidget.jsx';
import { HelloMessage } from './component/render-props/HelloMessage.jsx';
import { UserWidgetHOC } from './component/hoc/UserWidgetHOC.jsx';
import { UserWidgetHOCColor } from './component/hoc/UserWidgetHOCCColor.jsx';
import { Toolbar } from './component/eventhandler/Toolbar.jsx';
import { Toolbar2 } from './component/eventhandler/Toolbar2.jsx';


export default function App() {

	return (
		<>
			<CallbackComponent />
			<MemoComponent />
			<Expensive />
			<UserWidget render={(user) => <HelloMessage user={user} />} />
			<UserWidgetHOC />
			<UserWidgetHOCColor />
			<Toolbar />
			<Toolbar2 />
		</>
	);
};



