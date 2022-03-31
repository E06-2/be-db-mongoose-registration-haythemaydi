const mongoose = require('mongoose');
const userModel = new mongoose.Schema({
	username: String,
	password: String,
	firstName: String,
	lastName: String,
	dateOfBirth: String,
	email: String,
	telephone: Number,
	gender: String
});
module.exports = mongoose.model('USER', userModel);
