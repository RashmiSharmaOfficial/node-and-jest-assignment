var logReg = require("./12-logReg")

test('Login', () => {
    expect(logReg.login('rosy', '123')).toBe("Login Successful!");
});

test('Login - invalid user', () => {
    expect(logReg.login('ros', '123')).toBe("Invalid user!");
});

test('Reg - user already exist', () => {
    expect(logReg.reg('rosy', '123')).toBe("User already exist!");
});

test('Reg - user already exist', () => {
    expect(logReg.reg('amie', 'xyz')).toBe("Reg successful!");
    console.log(JSON.stringify(logReg.users));
});

