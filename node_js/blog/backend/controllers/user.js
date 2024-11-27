const bcrypt = require('bcrypt');
const User = require('../models/User');
const { generate } = require('../helper/token');
const ROLES = require('../constants/roles');

//register
async function register(login, password) {
	if (!password) throw new Error('Password is required');
	const hashPassword = await bcrypt.hash(password, 10);
	const user = await User.create({ login, password: hashPassword });
	const token = generate({ id: user._id });
	return { user, token };
}

// login
async function login(login, password) {
	const user = await User.findOne({ login });
	if (!user) throw new Error('User not found');
	const isPasswordMatch = await bcrypt.compare(password, user.password);
	if (!isPasswordMatch) throw new Error('Passwords do not match');
	const token = generate({ id: user._id });
	return { user, token };
}

function getUsers() {
	return User.find();
}

function getRoles() {
	return [
		{ id: ROLES.ADMIN, name: 'Admin' },
		{ id: ROLES.MODERATOR, name: 'Moderator' },
		{ id: ROLES.USER, name: 'User' },
	];
}

// delete
async function deleteUser(id) {
	return User.deleteOne({ _id: id });
}

// edit(roles)
async function updateUser(id, userData) {
	return User.findByIdAndUpdate(
		{ _id: id },
		userData,
		{ returnDocument: 'after' });
}

// add


module.exports = { register, login, deleteUser, updateUser, getUsers, getRoles };
