const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BusSchema = new Schema({
    number: {type: Number, required: true},
    readableName: {type: String, required: true},
    busLocation: {type: Schema.Types.Mixed, required: true},
    
});


module.exports = Bus = mongoose.model('bus', BusSchema);