const request = require('supertest');
const expect = require('expect');

const { app } = require('./../../app');

describe('GET /api/restaurants', () => {

  it('should get all restaurants', done => {
    request(app)
      .get('/api/restaurants')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(res => {
        expect(res.body.rows).toBeTruthy();
      })
      .end(done);
  });

});
