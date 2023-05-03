const { Thought, User, Reaction } = require('../models');

module.exports = {
  // find all the thoughts 
  async showAllThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  
  // find a single thought by its ID
async getOneThought(req, res) {
  try {
    const thought = await Thought.findById(req.params.thoughtId);
    if (!thought) {
      return res.status(404).json({ message: 'No thought with that ID' });
    }
    res.json(thought);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
},
  // creating a thought text
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      const user = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $addToSet: { thoughts: thought._id } },
        { new: true, runValidators: true } // include runValidators option
      );
      if (!user) {
        return res
          .status(404)
          .json({ message: 'Thought created, but found no user with that ID' });
      }
      res.json('Created the thought');
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // updating the thoughttext
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body }, 
        { runValidators: true, new: true } 
      );

      if (!thought) {
        return res.status(404).json({ message: 'No thought with this id!' });
      }

      res.json(thought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // deleting a thought
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndRemove({ _id: req.params.thoughtId });
      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }
      const user = await User.findOneAndUpdate(
        { thoughts: req.params.thoughtId },
        { $pull: { thoughts: req.params.thoughtId } },
        { new: true }
      );
      
      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }
      res.json({ message: 'Thought and its associations deleted' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // adding a reaction to a thought
  async addThoughtReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { new: true, runValidators: true } // include runValidators option
      );
      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }
      res.json(thought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // delete a reaction from a thought
  async deleteThoughtReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { new: true, runValidators: true } // include runValidators option
      );
      if (!thought) {
        return res.status(404).json({
        msg: 'Thought not found'
        });
        }
        res.json(thought);
        } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
  }, 
};