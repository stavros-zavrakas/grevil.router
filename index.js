var express = require('express');

const consumes = ['grevil.libs'];
const provides = ['grevil.router'];

function setup(options, imports, register) {
  var libs = imports['grevil.libs'];
  
  libs.foo();

  var router = express.Router();

  router.get('/', function (req, res) {
    res.render('home');
    // res.json({home: 'home'});
  });

  return register(null, {
    'grevil.router': router
  });
}

setup.consumes = consumes;
setup.provides = provides;

module.exports = setup;
