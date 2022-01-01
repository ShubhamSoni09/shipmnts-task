const mongoose = require("mongoose");

const trSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    date: { type: Date, default: Date.now }
})
module.exports = mongoose.model("trData", trSchema);