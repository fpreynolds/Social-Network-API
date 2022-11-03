const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

router.route("/").get(getThoughts).post(createThought);

router
  .route("/:thoughtId")
  .get(getThoughts)
  .put(updateThought)
  .delete(deleteThought);

rouiter.route("/:thoughtId/reactions").post(addReaction);

router.route("/:thoughtId/reactions").post(addReaction);

router.route("/:thougyhtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
