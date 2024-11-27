const authenticated = require('../middlewares/authenticated');
const dtoUser = require('../helper/dto/dtoUser');

const { register, login } = require('../controllers/user');
const express = require('express');
const router = express.Router({ mergeParams: true });

router.post('/register', async (req, res) => {
	try {
		const { user, token } = await register(req.body.login, req.body.password);
		res.cookie('token', token, { httpOnly: true })
			.send({ error: null, user: dtoUser(user) });
	} catch (error) {
		res.status(400).send({ error: error.message });
	}
});
router.post('/login', async (req, res) => {
	try {
		const { user, token } = await login(req.body.login, req.body.password);
		res.cookie('token', token, { httpOnly: true })
			.send({ error: null, user: dtoUser(user) });
	} catch (error) {
		res.status(400).send({ error: error.message });
	}
});
router.post('/logout', authenticated, async (req, res) => {
	res.clearCookie('token').send({});
});

module.exports = router;