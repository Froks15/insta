const mongoose = require('mongoose')
const Schema = mongoose.Schema

const subscribeSchema = new Schema(
  {
    subscriberID: { type: Schema.Types.ObjectId, required: true },
    userID: { type: Schema.Types.ObjectId, required: true },
  },
  { strict: false, versionKey: false, timestamps: true }
)

module.exports = mongoose.model('Subscribe', subscribeSchema, 'subscribe')
