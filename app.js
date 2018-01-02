var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');

// var index = require('./routes/index');
// var users = require('./routes/users');
var app = express();
var mongoose = require('mongoose');
var fs = require('fs');
var User = require('./Mongodb/usersSchema');
const PORT = 5000;
// var credential = require('./google_service/credential');
//
// var auth = new googleAuth();
// var oauth2Client = new auth.OAuth2(credential.client_id,credential.client_secret,credential.redirect_uris);
//
// oauth2Client.credentials = credential.credentials;
// var service = google.drive('v3');

mongoose.connect('mongodb://lalji_dp:lanetteam1@ds155130.mlab.com:55130/devlopment_test',(err) => {
    if(err){
        console.log(err)
    }else{
        console.log('Connected !');
    }

});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
//
// app.use('/', index);
// app.use('/users', users);

app.get('/',(req,res) => {
    res.send({message: 'Hello Node.'})
});

app.get('/app/get_users',(req,res) => {
    console.log('access get_users API');
    const error={};
    User.find({},(err,users) => {
        if(err){
            res.send(err);
        }else{
            console.log('collected.');
            res.send(users);
        }
    });
});

app.post('/app/user/auth',(req, res) => {
    if(req.body.email && req.body.password){

        User.findOne({
            email: req.body.email,
            password: req.body.password
        }, (err,user) => {
            if(err){
                res.send(err);
            }else{
                console.log('success', user);
                if(user){
                    res.send(user);
                }else{
                    res.send({ message: 'Invalid Credential.' });
                }

            }
        });

    }else{
            res.send({ error: 'email id & password Requierd' });
    }

});

app.post('/app/create_user',(req,res,next) => {
    console.log('request data',req.body);
    const error ={};
    const { firstname, lastname, dob, email, password, cpassword } = req.body;
    if(req.body){
        if(firstname ==''){
            error.firstname = "Required firsrname!";
        }
        if(lastname == ''){
            error.lastname = "Required lastname!";
        }
        if(dob == ''){
            error.dob = 'Required date of Birth';
        }
        if(email == ''){
            error.email = "Required email!";
        }
        if(password == ''){
            error.password = 'Required password!';
        }
    }else{
        res.send({error : 'Empty Request for create users..!',error_code: 1254});
    }
        console.log('saved executed...');
        new User({
            firstname:firstname,
            lastname:lastname,
            dob:dob,
            email:email,
            password:password
        }).save((err, user) => {
                if(err){
                    res.send({error: err});
                }else{
                    res.send({...user,done:true});
                }
        });
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
