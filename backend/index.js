require('dotenv').config({path: '../.env'})
const db = require('./db');
var app = require('express')();
var http = require('http').Server(app);
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth')
const postRoutes = require('./routes/post')
const subscribeRoutes = require('./routes/subscribe')
const userRoutes = require('./routes/user')


db.connect()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/post', postRoutes)
app.use('/api/v1/subscribe', subscribeRoutes)
app.use('/api/v1/user', userRoutes)


app.get('/', function(req, res){
    return res.json('/')
});

http.listen(5000, function(){
  console.log('listening on *5000');
});