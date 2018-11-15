const mongoUri = process.env.MONGODB_LOCAL_URI
const mongoose = require('mongoose');

exports.connect = () => {
    return mongoose.connect(mongoUri, {
        useCreateIndex: true,
        useNewUrlParser: true
    });
}