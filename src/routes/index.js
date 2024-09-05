const { Router } = require("express");
const router = Router();

const {slashRoute} = require("../controllers/index");

/* GET home page. */
router.route("/").get(slashRoute);

module.exports = router;
