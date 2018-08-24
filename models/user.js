var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    admin: { type: Boolean, default: false },
    password: { type: String, required: true },
    address: { type: String, required: true}
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);