const User = require('./models/User');
const chalk = require('chalk');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('./contants/jwt/jwt');
const CREDENTIALS = require('./contants/cred/cred');

async function addUser() {
	const user = await User.findOne({ email: CREDENTIALS.LOGIN });
	if (user) return { user: user, status: 200 };
	const passwordHash = await bcrypt.hash(CREDENTIALS.PASSWORD, 10);
	const newUser =
		await User.create({ email: CREDENTIALS.LOGIN, password: passwordHash });
	return { user: newUser, status: 201 };
}

async function loginUser({ email, password }) {
	const user = await User.findOne({ email });
	if (!user) {
		console.log(`${chalk.redBright('User: login')} failed`);
		throw new Error('User not found');
	}

	const isPasswordCorrect = await bcrypt.compare(password, user.password);
	if (!isPasswordCorrect) {
		console.log(`${chalk.redBright('User: password')}   failed`);
		throw new Error('Password not correct');
	}
	console.log(`${chalk.greenBright('User: login ')} ${user._id}, successfully.`);
	return jwt.sign({ email }, JWT_SECRET, { expiresIn: '1d' });
}

module.exports = { addUser, loginUser };
