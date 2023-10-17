
// function Car(name, brand) {
//     this.name = name;
//     this.brand = brand
// }

// let car1 = new Car("Car 1", "A");
// let car2 = new Car("Car 2", "B")


// console.log(car1)
// console.log(car2)

/* multipal Triangle */

// function triangle(...a) {
//     let string = "";
//     let n = [...a];
//     for (let b = 0; b < n.length; b++) {
//         // console.log(n[b])
//         for (let i = 0; i <= n[b]; i++) {
//             for (let j = 1; j <= n[b] - i; j++) {
//                 string += " ";
//             }
//             for (let k = 1; k <= 2 * i; k++) {
//                 if (i === n[b] && k <= n[b]) {
//                     string += "* ";

//                 } else {
//                     if (k === 1 || k === 2 * i - 1 && i != n[b]) {
//                         string += "*";
//                     } else { string += " "; }
//                 }
//             }
//             if(i==n[b]){
//             string += "\n"

//                 for(let k=1 ; k<n[b]; k++){
//             string += " "

//                 }
//             string += n[b] + "\n";

//             }
//             else{
//             string += "\n"}
//         }
//     }
//     return string;
// };
// console.log(triangle(10, 5))

/*     Classes     */

// class user {
//     constructor(username, email, pasword) {
//         this.username = username;
//         this.email = email;
//         this.password = pasword;
//     }

//     fulldetails(x) {
//         return ` name = ${this.username} \n email = ${this.email} \n password = ${this.password + x}`
//     }
// }


// class teacher extends user {
//     constructor(username, email, pasword, des) {
//         super(username, email, pasword)
//         this.des = des;
//     }
//     logME() {
//         console.log(this.des)
//     }
// }

// const person = new teacher("rajnish", "raj@gmail.com", 1000, "acp")



// const user1 = new user("raj", "degydged", "782781")
// person.logME();
// // console.log(person.)


/*      Function constructor & prototype properties     */
// let detail = new User("Raj")
// console.log(User.__proto__)
// console.log(detail.__proto__ === User.prototype)

// function User(name){
//     this.name = name;
//     this.lname = "kumar";
    
//     /* never create a function inside a constructor :- because every time its create a function ;   */
//     // this.fullname = function(){
//     //     return this.name + this.lname;
//     // };
// }
// User.prototype.fullname = function(){       /*  In Arrow function this. property dose not work!!!   */
//     console.log(this.lname)
//     return this.name + this.lname;
// };

// console.log(detail.__proto__)

/*      classes in depth        */

// class bank{
//     // #amount;
//     constructor(name, amount){
//         // let value = amount;
//         this.name = name;
//         this.account = Date.now();
//         this.#amount = amount;
//     }
//     #amount;
//     showDetails(){
//         console.log(` name :- ${this.name} \n account no:- ${this.account} \n amount:-  `)
//     }
//     tt(){
//         // return ` Amount:- ${#amount}`
//         // console.log(this.#amount)
//         return this.#amount
//     }
// }

// const current = new bank("rajnish", 5000);

// current.showDetails();
// console.log(current.tt())


/*      call() & apply() & bind()       */

// function setUsername(username){
//     this.username = username;
// }
// function createusername(username, password, email){
//     setUsername.call(this, username);
//     this.password = password;
//     this.email = email;
// }
// const data  = new createusername("xyz", 123, "@gmail.com")
// console.log(data)

// function a(name){
//     return name = "rajnish"
// }
// function b(name){
//     name = a(name)
//     return name += " kumar"
// }
// console.log(b())

// const obj = {
//     a : "1"-"1",
//     b : 1 + "1",
//     c : "1" + 1,
//     d : 1 + 1,
//     e : 1 + 1 -1,
//     f : 1 + "1" -"1",
//     g : "1" + 1 -"1",
//     h : "1" + "1" -1,
//     i : "1" + "1" -"1"


// }
// for(key in obj){
//     console.log(`${typeof key} = ${typeof obj[key]}`)
// }