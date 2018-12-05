const fetch = require("node-fetch");
const url = "http://localhost:3000";

test('calling /square?string= should return 0', () => {
    let newurl = url + '/square/string=';
    fetch(newurl).then(response => expect((response.body.result)).toBe(0));
});

test('calling /square?string=1234 should return 16', () => {
    let newurl = url + '/square/string=1234';
    fetch(newurl).then(response => expect((response.body.result)).toBe(16));
});

test('calling /square?blabla=0 with query that isn\'t string=num should return with a 418 I\'m a teapot status code', () => {
    let newurl = url + '/square/blabla=0';
    fetch(newurl).then(response => expect((response.statusCode)).toBe(418));
    
});