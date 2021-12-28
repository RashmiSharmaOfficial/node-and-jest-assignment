var sumModule = require('./8-sum')
var sum = sumModule.sum;
var multi = sumModule.multi;
var div = sumModule.div;
var largest2 = sumModule.largest2;
var largest3 = sumModule.largest3;
var facto = sumModule.factorial;
var oddOrEven = sumModule.oddOrEven;
var largeArray = sumModule.largeArray;
var findEle = sumModule.findEle;

test('testing sum()', ()=> {
    expect(sum(3, 3)).toBe(0);
})

test('testing multi()', ()=> {
    expect(multi(2, 3)).toBe(6);
})

test('testing div()', ()=> {
    expect(div(6, 3)).toBe(2);
})

test('testing largest2()', ()=> {
    expect(largest2(6, 3)).toBe(6);
})

test('testing largest3()', ()=> {
    expect(largest3(6, 3, 4)).toBe(6);
})

test('testing facto()', ()=> {
    expect(facto(4)).toBe(24);
})

test('testing oddOrEven()', ()=> {
    expect(oddOrEven(4)).toBeTruthy();
    expect(oddOrEven(7)).toBeFalsy();
})

test('testing largestarray()', ()=> {
    expect(largeArray([2, 3, 5 ,6])).toBe(6);
})

test('testing findele()', ()=> {
    expect(findEle([2, 3, 5 ,6], 3)).toBeTruthy();
    expect(findEle([2, 3, 5 ,6], 1)).toBeFalsy();
})
