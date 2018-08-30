var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

// var favoritesSchema = new Schema({
//   product: {type: Schema.Types.ObjectId, ref: 'Product'}
// })

var userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    admin: { type: Boolean, default: false },
    password: { type: String, required: true },
    address: { type: String},
    favorites: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}]
}, {
    timestamps: true
});

userSchema.set('toJSON', {
    transform: function(doc, ret) {
      // remove the password property when serializing doc to JSON
      delete ret.password;
      return ret;
    }
  });
  
  userSchema.pre('save', function(next) {
    // 'this' will be set to the current document
    var user = this;
    if (!user.isModified('password')) return next();
    // password has been changed - salt and hash it
    bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
      if (err) return next(err);
      // replace the user provided password with the hash
      user.password = hash;
      next();
    });
  });
  
  userSchema.methods.comparePassword = function(tryPassword, cb) {
    // 'this' represents the document that you called comparePassword on
    bcrypt.compare(tryPassword, this.password, function(err, isMatch) {
      if (err) return cb(err);
      cb(null, isMatch);
    });
  };
  
module.exports = mongoose.model('User', userSchema);