const { verify } = require('../helper/token');
const User = require('../models/User');

module.exports = async function(req, res, next) {
	const { id } = verify(req.cookies.token);
	const user = await User.findOne({ _id: id });
	if (!user) {
		res.status(403).send({ error: 'Authentication failed' });
		return;
	}
	req.user = user;
	next();
};