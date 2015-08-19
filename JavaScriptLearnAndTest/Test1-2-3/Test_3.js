obj1 = { name: "Martin", age: 35 };
obj2 = { name: "Stepik", age: 4 };

console.log(obj1.name + ' ' + obj1.age);

function Human(name, age) {
    this.name = name;
    this.age = age;
}

var martin = new Human("martin", 35);

console.log(martin.name + " " + martin.age);

