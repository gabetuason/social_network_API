const { User, Thought } = require('../models');

module.exports = {
  // acquire all the users
  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Get a single user by their ID
  async getOneUserID(req, res) {
    try {
      const user = await User.findById(req.params.userId).populate('thoughts').populate('friends');
      if (!user) {
        return res.status(404).json({ message: 'No user found with this ID' });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Creating a new user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Update the users by ID
  async updateUser(req, res) {
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true, runValidators: true });
      if (!updatedUser) {
        return res.status(404).json({ message: 'No user found with this ID' });
      }
      res.json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Delete the user by ID and all associated thoughts
  async deleteUser(req, res) {
    try {
      const user = await User.findByIdAndDelete(req.params.userId);
      if (!user) {
        return res.status(404).json({ message: 'No user found with this ID' });
      }
      await Thought.deleteMany({ username: user.username });
      res.json({ message: 'User and associated thoughts deleted' });
    } catch (err) {
      res.status(500).json(err);
    }
  },

// add a friend to user's friends list
  async addFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId} }, // pushes new friend's id into user's friends array
        { new: true }
      );

      if (!user) {
        return res.status(404).json({
          message: 'No user with that exact ID',
        });
      }

      res.json('Friend is added successfully');
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

// delete a friend from user's friends list
  async deleteFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId} }, // removes the friend id from user's friends array
        { new: true }
      );

      if (!user) {
        return res.status(404).json({
          message: 'No user with that ID',
        });
      }
      res.json('Friend is removed successfully');
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};
