const router = require('express').Router();
const {
  getAllUsers,
  getOneUserID,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend
} = require('../../controllers/userController');

// Get all the users, and posting... /api/users
router.route('/').get(getAllUsers).post(createUser);

// Acquiring a User by their ID, update and deleting... /api/users/:userId
router.route('/:userId').get(getOneUserID).put(updateUser).delete(deleteUser);

// Method for adding/deleting friends... /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(deleteFriend);

module.exports = router;

