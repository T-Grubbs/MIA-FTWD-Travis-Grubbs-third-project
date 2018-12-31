const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('../models/User');
const Exercise = require('../models/Exercise');

const routineSchema = new Schema({
	user: { type: Schema.Types.ObjectId, ref: 'User' },
	weekday: String,
	dateCreated: String,
	exercises: [ { type: Schema.Types.ObjectId, ref: 'Exercise' } ],
	sunday: [],
	monday: [],
	tuesday: [],
	wednesday: [],
	thursday: [],
	friday: [],
	saturday: []
});

const Routine = mongoose.model('Routine', routineSchema);

module.exports = Routine;