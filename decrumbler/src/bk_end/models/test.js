const mongoose = require('mongoose');

function dynamicSchema(collection){
    let dynamicColl = new mongoose.Schema({
        Name: {
            type: String,
            required: true
        },
        Subnet: {
            type: String,
            required: true
        },
        VLAN: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        GW: {
            type: String,
            required: true
        },
        VRF: {
            type: String,
            required: true
        },
        Location: {
            type: String,
            required: true
        },
    },
    {
        collection: collection
    });
    return mongoose.models[collection] //check if model already exists
    ? mongoose.model(collection) //return that model if it does
    : mongoose.model(collection, dynamicColl) //if it doesnt, then define that model
}
module.exports = dynamicSchema;