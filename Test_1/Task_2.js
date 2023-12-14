// Task 2: Object Methods

// Create an object called 'person' with properties 'name', 'age', and 'job'.
// Add a method 'introduce' that returns a string introducing the person.

const person = {
    name : "rajnish",
    age : 18,
    job : "Devloper",

    introduce: function(){
        return `Hi, I'm ${this.name}, I'm ${this.age} years old, and I work as a ${this.job}.`
    }
  };

  console.log(person.introduce());