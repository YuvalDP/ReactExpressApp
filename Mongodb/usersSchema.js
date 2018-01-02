var mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
    firstname : String,
    lastname : String,
    email : String,
    password :String,
    dob : Date
});


module.exports =  mongoose.model('Users_chat', UserSchema);