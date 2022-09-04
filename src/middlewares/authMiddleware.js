const authMiddleware = (req, res, next) => {
	var token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers['authorization'];
	if (token) {
		next();
	}
	else {
		return res.json({
			success: false,
			message: 'No token provied'
		})
	}

}