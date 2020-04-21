const app = require('../src/app')
const knex = require('knex');

describe('app endpoints', () => {
  let db;

  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DATABASE_URL
    });
    app.set('db', db);
  })

  describe('GET /faces', () => {

    it('GET /faces responds with 200', () => {
      return supertest(app)
        .get('/api/faces')
        .expect(200)
    })
  });

  describe('GET /faces/genders/:gender', () => {

    it('GET /faces/genders/:gender responds with 200', () => {
      return supertest(app)
        .get('/api/faces/genders/:gender')
        .expect(200)
    })
  });

  describe('GET /faces/ages/:age', () => {

    it('GET /faces/ages/:age responds with 200', () => {
      return supertest(app)
        .get('/api/faces/ages/:age')
        .expect(200)
    })
  });

  describe('GET /both/:gender/:age', () => {

    it('GET /both/:gender/:age responds with 200', () => {
      return supertest(app)
        .get('/api/both/:gender/:age')
        .expect(200)
    })
  });

});
