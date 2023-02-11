require('dotenv').config({ debug: true })
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const key =  process.env.SECRET_KEY;
const UserSchema = mongoose.Schema({

    firstName: {
        type: String,
        trim: true,
        required: true
    },
    lastName: {
        type: String,
        trim: true,
        required: true
    },
    mail: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    local: {
        type: [String],
        default: []
    },
    urlImage: {
        type: String,
        trim : true
    },
    subscription: {
        type: String,
        enum: ['none','free','premium', 'admin'],
        required: true
    },
    movies: {
        type: [Object],
        default: []
    }

})

UserSchema.methods.comparePassword = function(password){
    return bcrypt.compareSync(password,this.password);
}

UserSchema.methods.generateAuthToken = function(){
    const user = this;
    const token = jwt.sign({user},key);
    return token;
}


UserSchema.methods.checkToken = function(){
    const token = this.generateAuthToken();
    try{
        jwt.verify(token,key);
        return true;
    }catch (err){
        return false;
    }
}

module.exports = mongoose.model("User",UserSchema);