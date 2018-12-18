const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const User     = require('../models/User')
const Exercise = require('../models/Exercise')

const routineSchema = new Schema({
  
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  weekday: String,
  dateCreated: String,
  exercises: [{type: Schema.Types.ObjectId, ref: 'Exercise'}],
  sundayRoutine: [],
		mondayRoutine: [],
		tuesdayRoutine: [],
		wednesdayRoutine: [ 'HEHEHEHEHEHEHEh' ],
		thursdayRoutine: [],
		fridayRoutine: [],
		saturdayRoutine: [],
	


})

const Routine = mongoose.model('Routine', routineSchema)

module.exports = Routine;

/**
 * exercises: [
      {
          crunches: {
            momnda:true,
            tues, false,
            etc..
          } 
      },
      {
          pushups : {

          }
      }
 * ]
 */