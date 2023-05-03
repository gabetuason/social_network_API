const { Schema, model } = require('mongoose');

// Schema for the User model. User needs username and email
const userSchema = new Schema(
  {
// username is String type, which is unique, required, and trimmed
    username: { 
        type: String,
        unique: true,
        required: true,
        trim: true
    },
// email is String, required, unique, and validated using email regex pattern mongoose
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
    },
// thoughts field as an array of ObjectIds, referencing the thought model
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'thought'
        }
    ],
// Defined the friends as an array also of ObjectIds, referencing the user model
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user'
        }
    ]
  },
  {
  // virtuals to true for JSON, but not id field
    toJSON: {
      virtuals: true,
    },
    id: false
  }
);

// Defined virtual "friendCount"  and returns length of friends array
userSchema.virtual('friendCount')
.get(function () {
  return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;
