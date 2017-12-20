const expect = require('expect');
const request = require('supertest');

// describe('example success test for travis build', () => {

//   it('I am not failing :)', () => {
//     expect(3).toBe(3);
//   });

//   it('I am not failing :) too', () => {
//     expect(310).toBe(310);
//   });

// });


describe('GET /api/restaurants', () => {

  var app;
  beforeEach(function () {
    app = require('./../app');
  });
  afterEach(function () {
    app.close();
  });

  it('should get all restaurants', done => {
    request(app)
      .get('/api/restaurants')
      .expect(200, done);
      // .expect('Content-Type', /json/)
      // .expect(res => {
      //   expect(res.body.rows).toBeTruthy();
      // })
      // .end((err, res) => {
      //   if (err) return done(err);
      //   done();
      // });
  });

});
