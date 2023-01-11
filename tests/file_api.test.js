const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

test('Access to root recieves a status code of 200', async () => {
  await api
    .get('/')
    .expect(200)
})

test('The test database file list can be retrieved', async () => {
    await api
    .get('/api/files/getList').expect(200)
})

afterAll(() => {
  mongoose.connection.close()
})