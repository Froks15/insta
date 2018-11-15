const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { strict: false, versionKey: false }
)

module.exports = mongoose.model('User', userSchema, 'user')
