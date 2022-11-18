const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let ipSchema = new Schema({
  Ip: {
    type: String
  },
}, {
    collection: 'ip'
  })
  
module.exports = mongoose.model('ip', ipSchema)