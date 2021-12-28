var users  = require("./10-login");

test('loginfunc()', () => {
    expect(users.loginFunc("rosy", "123")).toBe("Valid User");
});

test('loginfunc()', () => {
    expect(users.loginFunc("ros", "123")).toBe("Invalid User");
});