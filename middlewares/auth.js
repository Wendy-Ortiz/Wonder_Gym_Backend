const { ROLES } = require("../utils/constants");

exports.checkUserIsAuthenticated = async (req, res, next) => {
    const userIsAuthenticated = true;
    if(!userIsAuthenticated) {
        return res.status(401).json({
            error: true,
            message: "El usuario no esta autenticado",
        });
    }
    next();
}

exports.checkRoles = (requiredRoles) => {
    return async (req, res, next) => {
        const userRoles = [ROLES.ADMIN];
        const role = userRoles.find((r) => {
            return requiredRoles.find((rr) => rr === r) !== undefined;
        });
        if(role === undefined) {
            return res.status(401).json({
                error: true,
                message: "El usuario no tiene los permisos necesarios para acceder a este recurso",
            });
        }
        next();
    };
}