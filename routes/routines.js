const express = require("express");
const router = express.Router();
const {
  listRoutines,
} = require("../controllers/routines");

const { checkUserIsAuthenticated, checkRoles } = require("../middlewares/auth");
const { validateSchema } = require("../middlewares/validation");
const { ROLES } = require("../utils/constants");

const {
  listRoutinesSchema,
} = require("../validators/routines");

router
  .route("/")
  .post([validateSchema(listRoutinesSchema)], listRoutines)

module.exports = router;
