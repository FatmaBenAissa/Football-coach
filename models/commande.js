const mongoose = require("mongoose");
const schema = mongoose.Schema;

const commandeSchema = new schema({
    nameuser: String,
    nameproduct: String,
    image: String,
    price: Number,
    date: { type: String },
    status: String
});
const Commande = mongoose.model("Commande", commandeSchema);
module.exports = Commande;