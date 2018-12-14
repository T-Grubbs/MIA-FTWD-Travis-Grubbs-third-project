const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const exerciseSchema = new Schema({

  title: String,
  primary: String,
  secondary: String,
  type: String,
  image: String,

})

const Exercise = mongoose.model('Exercise', exerciseSchema)

module.exports = Exercise