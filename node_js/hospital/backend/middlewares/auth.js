const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../contants/jwt/jwt');
const PATH = require('../contants/path/path');

function auth(req, res, next) {
	const token = req.cookies.token;
	if (!token) {
		return res.redirect(PATH.LOGIN);
	}
	try {
		const verifyResult = jwt.verify(token, JWT_SECRET);
		req.user = {
			email: verifyResult.email,
		};
		next();
	} catch (err) {
		if (err.name === 'TokenExpiredError') {
			return res.status(401).json({ message: 'Token expired' });
		}
		return res.status(401).json({ message: 'Invalid token' });
	}
}

module.exports = auth;
