const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction'); // Import the Reaction schema

// The Schema for the Thought model
const thoughtSchema = new Schema(
  {
// ThoughtText with String type, required and has minimum and maximum lengths 1- 280 characters
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
// CreatedAt has Date, default value of the current timestamp and a getter method to format the timestamp on query
    createdAt: {
        type: Date,
        default: Date.now,
        get: (time) => time.toLocaleString() // Convert the date to a string in a readable format
    },
// User that created the thought
    username: {
        type: String,
        required: true
    },
// Array of nested documents created with the reactionSchema
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      virtuals: true, // Include virtual field
      getters: true // Add getters 
    },
    id: false // '_id' not included in the JSON output
  }
);

// Virtual property reactionCount and then returns the length of reactions array
thoughtSchema.virtual('reactionCount')
  .get(function () {
    return this.reactions.length;
  });

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
