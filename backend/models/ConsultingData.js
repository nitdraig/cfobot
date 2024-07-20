const mongoose = require("mongoose");

const consultingSchema = new mongoose.Schema({
  consulting: String,
});

module.exports = mongoose.model("Consulting", consultingSchema);
