const string_square = require('./string_square.js').string_square

test('passing a string should work', () => {
    expect(string_square('dio')).toBe(9);
});

test('passing something that isn\'t a string should return -1', () => {
    expect(string_square(1)).toBe(-1);
});