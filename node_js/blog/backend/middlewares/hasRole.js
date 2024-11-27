module.exports = function(roles) {
	return (req, res, next) => {
		console.log(roles);
		console.log(req.user.role);
		if (!roles.includes(req.user.role)) {
			res.status(403).send({ error: 'Access denied' });
			return;
		}
		next();
	};
};