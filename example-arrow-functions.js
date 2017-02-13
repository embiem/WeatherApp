// use arrow function in place of a regular function
var names = ['Martin', 'Julia', 'Michael'];

names.forEach(function (name) {
  console.log('forEach', name);
});

console.log("-----------");

names.forEach((name) => {
  console.log('arrow forEach', name);
});
names.forEach((name) => console.log('singleLine', name));

console.log("-----------");

var returnMe = (name) => name + "!";
console.log(returnMe("Martin"));

console.log("-----------");

// arrow functions allow to use the parent's "this"

var person = {
  name: 'Martin',
  greet: function () {
    names.forEach(function (name) {
      console.log(this.name + ' says hi to ' + name);
    });
  }
}
person.greet();

person = {
  name: 'Martin',
  greet: function () {
    names.forEach((name) => { // now with arrow function, we take on the this-scope of the parent
      console.log(this.name + ' says hi to ' + name);
    });
  }
}
person.greet();
