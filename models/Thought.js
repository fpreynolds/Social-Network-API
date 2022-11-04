const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");
const dateformat = require("../utils/dateFormat");
const dateFormat = require("../utils/dateFormat");
const thoughtSchema = new Schema(
  {
    thoughttext: {
      type: String,
      required: "Add thought!",
      minlength: 1,
      maxlength: 200,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});
const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
