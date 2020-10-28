const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');

var userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    email_is_verified: {
        type: Boolean,
        default: false
    },
    referral_code: {
        type: String,
        default: function(){
            hash = 0

            for (let i = 0; i < this.email.length; i++) {
                this.email.charCodeAt(i) + ((hash << 5) - hash)
                hash |= 0
            }
            return hash
        }
    },
    balance: Number,
    date: {
        type: Date,
        default: Date.now
    }
}, {strict: false}
);

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);