import { FunctionComponent } from './component/FunctionComponent.jsx';
import { ThemeProvider } from './context/ThemeProvider.jsx';
import { useThemeUpdate } from './context/useThemeUpdate.jsx';
import './App.css';

export const App = () => {
	return (
		<>
			<ThemeProvider>
				<Home />
			</ThemeProvider>
			<ThemeProvider>
				<About />
			</ThemeProvider>
		</>
	);
};

const Home = () => {
	const handleChangeDark = useThemeUpdate();
	return <div className="wrap">
		<button onClick={handleChangeDark}>Change Theme Home</button>
		<FunctionComponent title="Home" />
	</div>;
};

const About = () => {
	const handleChangeDark = useThemeUpdate();
	return <div className="wrap">
		<button onClick={handleChangeDark}>Change Theme About</button>
		<FunctionComponent title="About" />
	</div>;
};
