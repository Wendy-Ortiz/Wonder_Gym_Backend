const express = require("express");
const router = express.Router();

const { checkUserIsAuthenticated, checkRoles} = require("../middlewares/auth");
const { ROLES } = require("../utils/constants");
const {
    listUsers,
    createUser,
    loginUser,
} = require("../controllers/users");

router
    .route("/")
    .get([checkUserIsAuthenticated, checkRoles([ROLES.ADMIN])], listUsers)
    .post(createUser);

router.route("/login").post(loginUser);

module.exports = router;