const router = require("express").Router();
const controller = require("./movies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const { listen } = require("../app");

router.route("/").get(controller.list).all(methodNotAllowed);
router
  .route("/:movieId/theaters")
  .get(controller.listTheaters)
  .all(methodNotAllowed);
router.route("/:movieId/reviews").get(controller.listMovieReviews);
router.route("/:movieId").get(controller.read).all(methodNotAllowed);

module.exports = router;