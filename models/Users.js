const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
firstName : { type:  String, description: "Required Field", required: true },
lastName : { type:  String, description: "Required Field", required: true },
age : { type:  Number, description: "Required Field", required: true },
allergies : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('Users', UsersSchema);