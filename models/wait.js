
var mongoose = exports.mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

exports = module.exports = new Schema({
  sessionId: ObjectId, 
  option: Number 
});

