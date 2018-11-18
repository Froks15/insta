const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    name: { type: String, trim: true, required: true },
    email: { type: String, trim: true, required: true, unique: true },
    avatarSrc: { type: String, default: null },
    password: { type: String, required: true },
  },
  { strict: false, versionKey: false, timestamps: true }
)

module.exports = mongoose.model('User', userSchema, 'user')
