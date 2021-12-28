var reg = require("./11-register")

test('regestering user', () => {
    expect(reg.regPeople("abc", "xyz", "user")).toBe("successful");
});

//failed case
test('regestering user', () => {
    expect(reg.regPeople("", "xyz", "user")).toBe("successful");
});