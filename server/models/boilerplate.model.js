const mongoose = require("mongoose")


const BoilerPlateSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, "Name is required!"],
        minLength: [3, "Name must be at least 3 chars"],
        maxLength: [100000000, "Name can't be that long"]
    },

    age: {
        type: String,
        required: [true, "Author is required"]
    }


}, {timestamps:true})


const BoilerPlate = mongoose.model("BoilerPlate", BoilerPlateSchema );

module.exports = BoilerPlate;