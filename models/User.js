const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	username: String,
	password: String,
	dateOfBirth: Date,
	height: String,
	weight: String,
	bio: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
