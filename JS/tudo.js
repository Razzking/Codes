// console.log(process.argv)

// const myObj = {};
// const str = "myString";
// const rand = Math.random();
// const anotherObj = {};

// console.log(typeof str)
// // Create additional properties on myObj
// myObj.type = "Dot syntax for a key named type";
// myObj["dade_created"] = "This key has a space";
// myObj[str] = "This key is in variable str";
// myObj[rand] = "A random number is the key here";
// myObj[anotherObj] = "This key is object anotherObj";
// myObj[""] = "This key is an empty string";

// console.log(myObj);
// {
//   type: 'Dot syntax for a key named type',
//   'date created': 'This key has a space',
//   myString: 'This key is in variable str',
//   '0.6398914448618778': 'A random number is the key here',
//   '[object Object]': 'This key is object anotherObj',
//   '': 'This key is an empty string'
// }
// console.log(myObj.myString); // 'This key is in variable str'
// for (let key in myObj) {
//     console.log(key)
// }


/*
          id: number;
          title :  string;
          createdAt: number; //  timestamp in seconds
          done: boolean; false
        // f

*/
let todos = []
for (let i = 0; i < 10; i++) {

    todos.push({
        title: `Todo ${i + 1}`,
        id: i + 1,
        createdAt: Math.floor(new Date().getTime() / 1000),
        updatedAt: Math.floor(new Date().getTime() / 1000)
    })

}
const fs = require('fs');

fs.writeFileSync("dummy.json", JSON.stringify(todos));


