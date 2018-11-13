const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let HallSchema = new Schema({
	hallID: {type: Number, required: true},
    name: {type: String, required: true, max: 100},
    city: {type: String, required: true},
	date: {type: String, required: true},
	time: {type: Number, required: true},
	infoText:  {type: String, required: true},
	
});


// Export the model
module.exports = mongoose.model('Hall', HallSchema);