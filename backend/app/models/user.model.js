const mongoose = require("mongoose");


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


module.exports = mongoose.model("User",UserSchema);