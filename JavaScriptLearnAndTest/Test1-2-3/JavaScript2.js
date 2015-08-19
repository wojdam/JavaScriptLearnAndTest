var a = 'Hello world!';

function Test() {
    console.log('Called Test!');
}

function fromFahrenheitToCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

function TestGlobal() {
    carName = 'Volvo';// This should be a global variable.
}

Test();

console.log(a);

console.log(x);

var x;

if (x === undefined)
    console.log('x is undefined');
else
    console.log('x is defined');

console.log('100F is ' + fromFahrenheitToCelsius(100) + 'Celsius');

var car = { type: 'Fiat', model: 500, color: 'white' };

var person = {
    name: 'Martin',
    surname: 'Vojik',
    occupation: 'programmer',
    age: 35,
    fullName: function () {
        return this.name + ' ' + this.surname;
    }
};

console.log(person.name);
console.log(person.surname);
console.log(person.age);

console.log(person.fullName());

console.log(person.fullName);

TestGlobal();
document.getElementById('carNameTestGlobal').innerHTML = 'I can see ' + window.carName;

var joyName = 'Logitech Attack\'3';
var joyNameObj = new String('Logitech Attack\'3');

console.log(joyName);
console.log(joyName.length);

console.log(typeof joyName);
console.log(typeof joyNameObj);

console.log(joyName == joyNameObj);
console.log(joyName === joyNameObj);

var x = new String('xxx');
var y = new String('xxx');

console.log(x == y);
console.log(x === y);

console.log(joyName.substring(0, 8));
console.log(joyName.replace('Att', 'Detach:)'));
console.log(joyName.toLocaleUpperCase());
console.log(joyName.toLocaleLowerCase());

var str = 'a,s,d,f,g,h,j,k';

var strArray = str.split(',');

console.log(str);
console.log(str.split(','));
console.log(strArray.reverse().join(','));

var xx = 35.6944;
var yy = 44;
var zz = 1.0e-15;

console.log(xx + ' ' + yy + ' ' + zz);

var hex = 0xff;

console.log('Hex = ' + hex.toString(16));
console.log('Dec = ' + hex.toString(10));
console.log('Oct = ' + hex.toString(8));
console.log('Bin = ' + hex.toString(2));
console.log('Tri = ' + hex.toString(3));
console.log('Fou = ' + hex.toString(4));

console.log('Maximum number = ' + Number.MAX_VALUE);
console.log('Minimum number = ' + Number.MIN_VALUE);

console.log(Math.random());
console.log(Math.floor(Math.random() * 11));

console.log(new Date(0));
console.log(new Date());
console.log(new Date(1000000000));

var firsArr = ["AAA", "BBB", "CCC"];
var secoArr = new Array("DDD", "EEE", "ZZZ");

console.log(firsArr[0]);

var mixedArray = [111, 222.5, 'ssss'];

console.log(mixedArray);
console.log(mixedArray.length);

mixedArray.push("Ahoj");
console.log(mixedArray);
console.log(mixedArray.sort());

console.log(mixedArray.toString());

console.log(mixedArray.pop().toString());

var points = [40, 100, 1, 5, 25, 10];

points.sort(function (a, b) { return a - b; });

console.log(points);

for (var x in mixedArray)
    console.log(mixedArray[x]);

for (var x in person)
    console.log(person[x]);

console.log("string".constructor);
console.log((5).constructor);
console.log(function () { }.constructor);

console.log("string".constructor.toString().indexOf("String") > -1);
console.log(function () { }.constructor.toString().indexOf("Function") > -1);

var patt = /ahoj/;

var str = "Ahoj jak se vede?";

console.log(str.search(/ahoj/));
console.log(str.search(/ahoj/i));
console.log(str.search(/ve/));

console.log(str.replace(/Ahoj/, 'Nazdar'));

try {
    jfkasjfks;
}
catch (err) {
    console.log("Some error: " + err);
}