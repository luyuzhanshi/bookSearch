var mongoose = require('mongoose');

// Genre Schema
var bookSchema = mongoose.Schema({
	title:{
		type: String,
		require: true
	},
	genre:{
		type: String,
		require: true
	},
	description:{
		type: String
	},
	author:{
		type: String,
		require: true
	},
	publisher:{
		type: String,
		require: true,
	},
	pages:{
		type: String,
		require: true,
	},
	image_url:{
		type: String,
		require: true,
	},
	buy_url:{
		type: String,
		require: true,
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

var Genre = module.exports = mongoose.model('Book', bookSchema)

//Get Bools
module.exports.getBooks = function(callback, limit){
	Book.find(callback).limit(limit);
};