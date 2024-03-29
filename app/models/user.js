var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
// var Promise = require('bluebird');

var User = db.Model.extend({
  tableName: 'users',
  hasTimeStamps: true,
  initialize: function() {
    this.on('creating', function(model, attrs, options){
      var hash = bcrypt.hashSync(model.get('password'), null);
      model.set('password', hash);
    });
  }
});

module.exports = User;
