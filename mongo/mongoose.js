const mongoose = require('mongoose');
const config = require('./config');

//désactiver useFindAndModify pour éviter DeprecationWarning
mongoose.connect(config.mongoDbUrl, { useFindAndModify: false });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected');
});
module.exports = mongoose;