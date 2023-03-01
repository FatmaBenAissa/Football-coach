const mongoose = require("mongoose");
const schema = mongoose.Schema;

const programSchema = new schema({
    nameprogram: String,
    nameuser: String,
    week1: Array,
    week2: Array,
    datestart: String,
    docteur: String,

});
const Program = mongoose.model("Program", programSchema);
module.exports = Program;