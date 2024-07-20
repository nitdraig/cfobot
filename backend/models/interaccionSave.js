const mongoose = require("mongoose");

const interaccionSchema = new mongoose.Schema({
  role: String,
  contentUser: String,
  contentBot: String,
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Interaccion", interaccionSchema);
