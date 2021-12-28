var library = require('./9-arrObj');

test('getBookById', () => {
    expect(library.getBookById('b02')).not.toBeNull();
});

//failed
// test('getBooKById',() => {
//     expect(library.getBookById('b02')).toBeNull();
// });

test('getBookById', () => {
    expect(library.mapBook('b02')).not.toBeNull();
});
