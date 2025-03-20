import { SignIn } from './SingIn.jsx';
import { SignUp } from './SingUp.jsx';

export const AuthFormContainer = () => {
	const handleSignIn = (formData) => {
		console.log('Enter:', formData);
	};

	const handleSignUp = (formData) => {
		console.log('Registration:', formData);
	};

	return (
		<div>
			<h2>Enter</h2>
			<SignIn onSubmit={handleSignIn} />

			<h2>Registration</h2>
			<SignUp onSubmit={handleSignUp} />
		</div>
	);
};
