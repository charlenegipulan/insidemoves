var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewSchema = new Schema({
    content: String,
    username: String,
}, {
    timestamps: true
});

var productSchema = new Schema({
    name: {type: String, required: true},
    description: String,
    price: { type: Number, default: 0},
    reviews: [reviewSchema],
    size: Number
});

module.exports = mongoose('Product', productSchema);