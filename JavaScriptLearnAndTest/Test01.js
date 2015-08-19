var array = ["a", "b", "c", "d"];

for (item in array) {

    document.write(array[item] + "<br />");
}

console.log("Test");

console.log("Vypis array:" + array);


for (var i = 0; i < array.length; i++) {

    console.log(array[i]);
}

var anotherArray = [];

anotherArray["xxx"] = "lahoda";
anotherArray["yyy"] = "jahoda";

console.log((anotherArray["xxx"]));
console.log(anotherArray["yyy"]);

function Person(name, age) {

    this.name = name;
    this.age = age;
}

var man = new Person("Jan", 33);

console.log(man);
console.log(man.name + " " + man.age);
console.log(man.constructor);

console.log(Math.PI);

/*
var answer = prompt("Enter a number", "16");
var ext = Math.sqrt(answer);
document.write("Square root of " + answer + " is: " + ext);
*/

variable = "global variable";

console.log(variable);

(function Test() {

    var variable = "local variable";
    console.log(variable);
})();

console.log(variable);