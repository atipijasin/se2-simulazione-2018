const fetch = require("node-fetch");
const app = require('./server.js').app;
const url = "http://localhost:3000";


test('calling /square?string= should return 0', () => {
    url = url + '/square/string=';
    const response = await fetch(url);

    expect((response.body.result).toBe(0));
});

test('calling /square?string=1234 should return 16', () => {
    url = url + '/square/string=1234';
    const response = await fetch(url);

    expect((response.body.result).toBe(16));
});

test('calling /square?blabla=0 with query that isn\'t string=num should return with a 418 I\'m a teapot status code', () => {
    url = url + '/square/blabla=0';
    const response = await fetch(url);

    expect((response.statusCode).toBe(418));
});