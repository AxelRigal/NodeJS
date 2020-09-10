const mongoose = require('./mongoose');

const Hero = mongoose.model('Hero', new mongoose.Schema({
    name: String
  }));

module.exports = Hero;
  