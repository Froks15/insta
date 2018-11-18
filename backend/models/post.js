const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema(
  {
    author: { type: Schema.Types.ObjectId, required: true },
    type: { type: String, default: 'photo', required: true },
    value: { type: String, required: true }
  },
  { strict: false, versionKey: false, timestamps: true }
)

module.exports = mongoose.model('Post', postSchema, 'post')
