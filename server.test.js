const request = require('supertest');

const app = require('./server.js').app

test('calling / should return ok: true', async () => {
    const response = await request(app)
        .get('/').set('Accept', 'application/json');
        expect(response.body.ok).toBe(true);
});

test('calling /square?string= should return 0', async () => {
    const response = await request(app).get('/square?string=')
        .set('Accept', 'application/json');
        expect(response.body.result).toBe(0);
});

test('calling /square?string=1234 should return 16', async () => {
    const response = await request(app)
        .get('/square?string=1234')
        .set('Accept', 'application/json');
        expect(response.body.result).toBe(16);
});

test('calling /square?blabla=0 with query that isn\'t string=num should return with a 418 I\'m a teapot status code', async () => {
    const response = await request(app)
        .get('/square?blabla=0')
        .set('Accept', 'application/json');
        expect(response.statusCode).toBe(418);
});

test('calling /square?blabla=0&string=123 with multiple query params should return with a 418 I\'m a teapot status code', async () => {
    const response = await request(app)
        .get('/square?blabla=0&string=123')
        .set('Accept', 'application/json');
        expect(response.statusCode).toBe(418);
});