const { model } = require("mongoose")
const {UserSchema} = require("../schemas/userSchema")

const UserModel = new model("User",UserSchema )

module.exports = {UserModel}