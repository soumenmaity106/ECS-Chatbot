var mongoose = require('mongoose');
var GenericSchema = mongoose.Schema({
    question: { type: String},
    answer: { type: String},    
});
var Generic = mongoose.model('Generic', GenericSchema);
module.exports = Generic;