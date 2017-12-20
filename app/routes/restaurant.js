/**
 * @api {get} /restaurants Request Restaurants data
 * @apiName GetRestaurants
 * @apiGroup Restaurants
 *
 */
const router = require('express').Router();
const db = require('../db/knex');

router.get('/', wrapPromise((req, res, next) => {

  return db('restauranats').select().then(d => { return {rows: d} });

  // db('restaurantsa').select().then(rows => {
  //   res.status(200).send({ rows });    
  // }).catch(err => {
  //   next(err);
  // });

}));

function wrapPromise(fn) {
  return function(req, res, next) {
    fn(req, res, next).then(data => res.status(200).send(data)).catch(next);
  }
}


module.exports = router;