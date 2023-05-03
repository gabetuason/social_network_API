const router = require('express').Router();
const {
  showAllThoughts,
  createThought,
  updateThought,
  deleteThought,
  addThoughtReaction,
  deleteThoughtReaction,
  getOneThought
} = require('../../controllers/thoughtController');

// Finding all Thoughts and for posting a thought... /api/thoughts
router.route('/').get(showAllThoughts).post(createThought);

// Finding Thoughts for one, updating and deleting... /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getOneThought).put(updateThought).delete(deleteThought);

// thought reactions create... /api/thoughts/:thoughtId/api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addThoughtReaction);

// thought reactions delete... /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteThoughtReaction);

module.exports = router;
