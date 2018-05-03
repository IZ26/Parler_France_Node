var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');
var app = express();
var cors = require('cors');
const helmet = require('helmet');
const bodyparser = require('body-parser');
var allowedOrigins = ['http://localhost:3000',
    'http://yourapp.com'];

app.use(logger('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyparser.urlencoded({extended: false}));
app.use(helmet());

// Requête contre les gens non autorisés
app.use(cors({
    origin: function(origin, callback){
        // allow requests with no origin
        // (like mobile apps or curl requests)
        if(!origin) return callback(null, true);
        if(allowedOrigins.indexOf(origin) === -1){
            var msg = 'Go away son of bitch';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));

// catch 404 and forward to error handler
require('./server/routes')(app);

module.exports = app;
