const { Schema, Types } = require('mongoose');
// This will not be a model, rather it is used as the reaction field's subdocument schema in the Thought model

const reactionSchema = new Schema(
  { // Uses mongoose ObjectId data type and default value is set to a new ObjectID
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
//  String, required and has a maximum length of 280 characters for reactionBody
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: { // CreatedAt has Date, default value of the current timestamp and a getter method to format the timestamp on query
      type: Date,
      default: Date.now,
      get: (time) => new Date(time).toLocaleString(),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
