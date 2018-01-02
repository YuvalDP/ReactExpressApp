// const express = require('express');
// var google = require('googleapis');
// var googleAuth = require('google-auth-library');
// var app = express();
// var mongoose = require('mongoose');
// var fs = require('fs');
// require('./Mongodb/usersSchema.js');
// const PORT = 5000;
// // var credential = require('./google_service/credential');
// //
// // var auth = new googleAuth();
// // var oauth2Client = new auth.OAuth2(credential.client_id,credential.client_secret,credential.redirect_uris);
// //
// // oauth2Client.credentials = credential.credentials;
// // var service = google.drive('v3');
//
// const User = mongoose.model('Users_chat');
//
// mongoose.connect('mongodb://lalji_dp:lanetteam1@ds155130.mlab.com:55130/devlopment_test',(err,) => {
//         if(err){
//             console.log(err)
//         }else{
//             console.log('Connected !');
//         }
//
// });
//
//
// app.use(function (req, res, next) {
//
//     res.setHeader('Access-Control-Allow-Origin', '*');
//
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//
//     res.setHeader('Access-Control-Allow-Credentials', true);
//
//     next();
// });
//
//
// app.get('/', (req,res) => {
//     res.send({HelloWorld : 'helloBrother..'});
//
// });
//
// app.post('/app/create_user',(req,res) => {
//     console.log('request data',req.query);
//     const error ={};
//     if(!req){
//         if(req.firstname ==''){
//             error.firstname = "Required firsrname!";
//         }
//         if(req.lastname == ''){
//             error.lastname = "Required lastname!";
//         }
//         if(req.dob == ''){
//             error.dob = 'Required date of Birth';
//         }
//         if(req.email == ''){
//             error.email = "Required email!";
//         }
//         if(req.password == ''){
//             error.password = 'Required password!';
//         }
//     }else{
//         res.send({error : 'Emplty Request for create users..!',error_code: 1254});
//     }
//
//     if(!error){
//         new User(req).save();
//         res.send({ message : 'User Created Succeed!' });
//     }else{
//         res.send(error);
//     }
//
// });
//
//
// app.listen(PORT, () => {
//     console.log('server running on', PORT);
// });