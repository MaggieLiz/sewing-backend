const mongoose = require('mongoose');

const PatternSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  difficulty: { type: String, required: true },
  size: { type: String, required: true },
  fabricRequired: { type: String, required: true }
});

module.exports = mongoose.model('Pattern', PatternSchema);
