/**
 * @api {get} /user Request Restaurants data
 * @apiName GetRestaurants
 * @apiGroup Restaurants
 *
 */
const router = require('express').Router();
const db = require('../db/knex');

router.get('/', function(req, res, next) {

  db('restaurants').select().then( rows => {
    res.status(200).send({ rows });    
  }).catch(err => {
    res.status(500).send(err);
  });

});

module.exports = router;