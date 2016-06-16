var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

//Todo:
// - Pagination.
// - Auto-load from Strava using AJAX.

router.get('/', function(req, res, next) {
  res.redirect('/rides');
});

router.get('/rides/new', function(req, res, next) {
  res.render('new', {});
});

router.post("/rides", function(req, res, next) {
  knex('rides').insert({
    date: req.body.date,
    url: req.body.url
  }).then(function(results) {
    res.redirect("/rides");
  });
});

router.get('/rides', function(req, res, next) {
  knex('rides').select().orderBy('id', 'desc').then(function(results) {
    res.render('index', {rides: results});
  });
});

router.get('/rides/:id/edit', function(req, res, next) {
  knex('rides').where("id", req.params.id).select().then(function(result) {
    res.render('edit', { ride: result[0] });
  });
});

router.post('/rides/:id', function(req, res, next) {
  knex('rides').where("id", req.params.id).update({
    date: req.body.date,
    url: req.body.url
  }).then(function(results) {
    res.redirect('/rides');
  });
});

router.get('/rides/:id/delete', function(req, res, next) {
  knex('rides').where("id", req.params.id).select().then(function(result) {
    res.render('delete', { ride: result[0] });
  });
});

router.post('/rides/:id/delete', function(req, res, next) {
  knex('rides').where("id", req.params.id).del().then(function(results) {
    res.redirect('/rides');
  });
});

module.exports = router;
