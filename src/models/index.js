const { Schema, model } = require("mongoose");

const indexSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Index", indexSchema);
