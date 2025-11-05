const {model} = require("mongoose")
const {holdingSchema} = require("../schemas/holdingSchema")

const HoldingModel = new model("holding", holdingSchema)

module.exports = {HoldingModel}