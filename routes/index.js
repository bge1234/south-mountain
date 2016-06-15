var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

//Todo:
// - Pagination.

router.get('/', function(req, res, next) {
  knex('rides').select().then(function(results) {
      res.render('index', { rides: results});
  });
});

module.exports = router;
