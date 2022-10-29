const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let userSchema = new Schema({
  Salt: {
    type: String
  },
  Username: {
    type: String
  },
  Password: {
    type: String
  }
}, {
    collection: 'user'
  })
  
module.exports = mongoose.model('user', userSchema)