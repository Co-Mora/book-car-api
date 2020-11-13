const jwt = require('express-jwt');
const { secret } = require('config.json');

const auth = (roles = []) => {
    if (typeof roles === 'string') {
        roles = [roles];
    }
    return [
        jwt({ secret, algorithms: ['HS256'] }),

        (req, res, next) => {
            if (roles.length && !roles.includes(req.user.role)) {
                // user's role is not authorized
                return res.status(401).json({ message: 'Unauthorized' });
            }
            next();
        }
    ];
}

export default auth;