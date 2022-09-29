const mongoose = require('mongoose');

function dynamicSchema(collection){
    let dynamicColl = new mongoose.Schema({
        cookies: {
            type: String,
            required: true
        }
    },
    {
        collection: collection
    });
    return mongoose.models[collection] //check if model already exists
    ? mongoose.model(collection) //return that model if it does
    : mongoose.model(collection, dynamicColl) //if it doesnt, then define that model
}
module.exports = dynamicSchema;