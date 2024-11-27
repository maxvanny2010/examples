const authenticated = require('../middlewares/authenticated');
const { getRoles, getUsers, updateUser, deleteUser } = require('../controllers/user');
const hasRole = require('../middlewares/hasRole');
const dtoUser = require('../helper/dto/dtoUser');
const { ADMIN } = require('../constants/roles');

const express = require('express');
const router = express.Router({ mergeParams: true });

router.get('/', authenticated, hasRole([ADMIN]), async (req, res) => {
	const users = await getUsers();
	res.send({ data: users.map(dtoUser) });
});
router.patch('/:id', authenticated, hasRole([ADMIN]), async (req, res) => {
	const newUser =
		await updateUser(req.params.id, { role: req.body.roleId });
	res.send({ data: dtoUser(newUser) });
});
router.delete('/:id', authenticated, hasRole([ADMIN]), async (req, res) => {
	await deleteUser(req.params.id);
	res.send({ error: null });
});
router.get('/roles', authenticated, hasRole([ADMIN]), async (req, res) => {
	const roles = await getRoles();
	res.send({ data: roles });
});

module.exports = router;
