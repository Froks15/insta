require('dotenv').config({path: '../.env'})
const db = require('./db');
var app = require('express')();
var http = require('http').Server(app);
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth')
const postRoutes = require('./routes/post')

db.connect()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/post', postRoutes)

app.get('/', function(req, res){
    return res.json('/')
});

http.listen(5000, function(){
  console.log('listening on *5000');
});