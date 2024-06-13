const Pattern = require('../models/Pattern');

exports.getPatterns = async (req, res) => {
  try {
    const patterns = await Pattern.find();
    res.json(patterns);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addPattern = async (req, res) => {
  try {
    const pattern = new Pattern(req.body);
    await pattern.save();
    res.status(201).json(pattern);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updatePattern = async (req, res) => {
  try {
    const pattern = await Pattern.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(pattern);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deletePattern = async (req, res) => {
  try {
    await Pattern.findByIdAndDelete(req.params.id);
    res.json({ message: 'Pattern deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
