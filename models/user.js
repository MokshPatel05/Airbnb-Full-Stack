const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passpostLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
});

userSchema.plugin(passpostLocalMongoose); //this plugIn aumetically added hashed+salted username and password for out website in mongodb database
module.exports = mongoose.model("User" , userSchema);