// let obj = {
//     name: "raj",
//     lname: "kumar",
// };
// console.log(obj.name);

// Q. Why we use iffe in javascript ?
// Ans. one of the good ways to hide data from the global scope as it creates its own scope.

//  IIFE ( Immediately Invoked Function Expression )

// (()=>{
//     let name = "raj kumar ";
//     console.log(`i'm ,${name}`)
// })();

//  Name IIFE

// (function(){
//     let code= "hacker"
//     console.log(`i'm ,${code}`)
// })();

// Q. Why we use clone object ?
// Ans. Besacuse we do not create the same object if the same object already exists. 

// Using spread method to clone object

// const name = {
//     fname: "raj",
//     lname: "kumar"
// };
// const clone = { ...name };
// clone.fname = "rajnish"
// console.log(name)
// console.log(clone)

//   Using object.assign method to clone

// let name= {
//     fname: "raj",
//     lname: "kumar"
// }
// const clone = Object.assign(name,{fname: "rajnish"})
// console.log(clone)
// console.log(name)

// var obj = {
//     name: "rajnish",
//     age: 18,

// Q. Why we use Getters and Setters ?
// Ans. That provide access to object properties. Getter are used to readvalue of properties , Setter are used to write a value to properties.
/* Note: Object properties that is key of objects like name : , age: , ETC. */

//    Getting And Setting methods

//     get getname(){
//        return  this.name.toUpperCase().split("").reverse().join(``);
//     }
// set setname(n){
//     this.name = n.toUpperCase();
// }

// }
// obj.getname = "raj kumar";
// console.log(obj.getname);

// Q.1
// let a = "kumar"
// let b = "rajnish";
// [a,b] = [b,a];
// console.log(a , b);

//Q.2 To seprate a string

// let string = "hello my name is raj kumar";
// let break1 = string.split(" ");
// let string2 ;
// for(let i=0 ; i<4 ; i++)
// {
//         string2.push(break1[0]);
//         break1.shift();
// }
// console.log(string2.join(" "));
// console.log(break1.join(" "));
// function removeItems(arr, item) {
//         for ( var i = 0; i < item; i++ ) {
//             arr.pop();
//         }
//     }
// removeItems.prototype.pop2 = removeItems;
// console.log(break1.pop2(break1,2))

// merthod 2:-

// const index = string.indexOf("is")
// const str1 = string.substring(0, index + 2)
// const str2 = string.substring(index + 3)
// console.log(str1)
// console.log(str2)
// method 3 sortest method;
// string2 = break1.splice(4,5)
// console.log(break1.join(" "));
// console.log(string2.join(" "));



// //Q.3 You Can use prebuild function by variables when function to set in variable;

//         let obj ={
//                 a : "hello",
//                 fun: function(){
//                        var is = this;
//                         console.log("in normal fun" ,this.a);
//                         console.log("in normal fun" ,is.a);
//                 (()=>{
//                         is = this;
//                         console.log("in iife fun" ,this.a);
//                         console.log("in iife fun" ,is.a); 
//                 })();
//                 }
//         }
//         let b = toString;
//         console.log(b)
//         obj.fun();

//Q. 
//         function fun() {

//               return {
//                 x: "hello"
//         };
//         }
// console.log(fun());

// Q. do you know settimeout when 0ms so its also take a time 

// (()=>{
//         console.log(1);
//         setTimeout(() => {console.log(2)},1000);
//         setTimeout(() => {console.log(3)}, 0);
//         console.log(4);
// })();

//Q. 
// let arr = ["hello", "rajnish", "raj", "rajnishkumar", "om"];
// let arr2 = arr.map((x)=>{
//         return x.length
// })
// i = arr2.indexOf(Math.max(...arr2));
// console.log(arr[i]);

//Q. 
// let arr = [5,50,21,60,15,50,23]//, 56, 975, 23, 456, 73];
// let y = arr[0];
// let z = arr[0];
// i++, i = i + 1, i += 1

// for (let i = 1; i < arr.length; i++) {
//         if (y < arr[i]  || z < arr[i]  ) {

//                 z = y;
//                 y = arr[i];

//         }
// else if ( z < arr[i]) {
//         z = arr[i]
// }

//         }
// console.log(z)
// console.log(y)

//Q. 
// let string = "rajnish"; 
// let string2 = [];
// // string=string.split("")
// for(let i=0 ; i < string.length ; i++){
// // string[i] = string[i].codePointAt(i) - 32;
// // string[i] = String.fromCharCode(string[i])
//         string2[i] =  String.fromCharCode(string.codePointAt(i) - 32);
// }
// // string2=string2.join("")
// console.log(string2.join(""))

//Q. 
// let string = `rajnish kumar`;
// let arr  = [];
// for(let i=0; i<string.length; i++){
//         arr[i] = string.charAt(i);
// }
// console.log(arr)
// method 2:- 
// let string = `rajnish kumar`;
// [...string] = string;
//  console.log(string)

// //Q.
//         let string = "hello this is javascript";
//         [...string] = string;
//         for(let i=0 ; i< string.length ; i++){
//                 if(string[i] == ' '){
//                         string[i+1] = string[i+1].toUpperCase();
//                 }else if(string[0] != ' '){
//                         string[0] = string[0].toUpperCase();
//                 }
//         }
//         console.log(string.join(""));

//Q. 
// let string = "rajnish";
// [...string] = string;
// let length = string.length;
// for(let i=0 ; i < length; i++){
//         length = length-1;
//         let temp = string[i];
//         string[i] = string[length];
//         string[length] = temp;
// }
// console.log(string.join(""));

//Q.
// let num, i = 0;
// let arr = []
// for(num = 2 ; num<=100 ; num++){

//         if(num == 2 || num == 3 || num == 5 || num ==7 ){
//                 arr[i] = num;
//                 i+=1
//         }
//         else if(num %2 != 0 && num %3 != 0 && num %5 != 0 && num %7 !=0){
//                 arr[i] = num;
//                 i+=1
//         }else{

//         }
// }
// console.log(arr)
//Q.
// function sum(value) {
//         if (i == arr.length) {
//                 return value;

//         } else {
//                 value = value + arr[i];
//                 console.log(value)
//                 i += 1;
//                 return sum(value);
//         }
// }
// let i = 0;
// let arr = [2, 3,5];
// console.log(sum(0));

//Q.
// console.log("A*2345"[1])

// '123-456-789' - input
// ['1','2', '3', '4', '5','6'] output
// ['1','2', '3', '-', '4', '5','6', '-', ] output

//  ['123', '456', '789']

// let str = "123-456-789"
// let arr = [];
// let k = 0, str2 = '';
// let sep = "-"
// for (let i = 0; i <= str.length; i++) {
//         if (str[i] === sep || i === str.length) {
//                 arr[k] = str2;
//                 k += 1;
//                 str2 = '';
//         }
//         else {
//                 str2 += str[i];
//         }
// }
// console.log(arr)

//Q.

// console.time()
// let arr = [1,5,2,6,2,3,6];
// for(let i=0 ; i< arr.length ; i++){
//         for(let j=i+1 ; j< arr.length ; j++){
//                 if(arr[i] == arr[j]){
//                 delete arr[j];
//                         for(let k = j ; k < arr.length; k++){
//                                 arr[k] = arr[k+1]
//                         }
//                         arr.length -= 1;
//                 }
//         }
// }
// console.log(arr)
// console.timeEnd()

//Q. 
// console.time()

// let arr = [22,86,16,43];
// let largeNum = 0 , smallNum = arr[0];
// for(let i=1 ; i< arr.length ; i++){
//         if(arr[i] > largeNum ){
//                 largeNum = arr[i]
//         }
//         else if(arr[i] < smallNum){
//                 smallNum = arr[i]
//         }
// }
// console.log(`Largeset Diffrence Between Any Two Number In An Array Is : ${largeNum - smallNum}`);
// console.timeEnd()

//Q.

// let arr= [null ,undefined, 23,14,false , "22228"];
// let arr2 = [];
// let j = 0;
// for(let i=0; i<arr.length; i++ ){
//         console.log(typeof arr[i], arr[i])
//         if(typeof arr[i] != typeof 0){
//                 arr2[j] = arr[i];
//                 j+=1;
//         }
// }
// console.log(arr2);

//Q. 
// let num ;
// for(let i=1; i<=15; i++){
//         num = 5 | i
//         console.log(+num)
// }

//Q.    traingle
// console.time()
// function triangle(triangleSize) {
//     let rowSize=triangleSize;
//     let leftCol,rightCol,row;
//     let s = "";

//     for(row=1; row<=triangleSize; row++){

//         for(leftCol=1; leftCol<=rowSize; leftCol++){

//             if(row == triangleSize){
//                 for(leftCol=1; leftCol<=row; leftCol++){
//                     s += "* "
//                 }
//             }

//             else if(leftCol == rowSize){
//                 s += "*"
//                 let rightprint = 2*(triangleSize-leftCol);
//                 for( rightCol=1; rightCol<=rightprint; rightCol++ ){
//                     if(rightCol == rightprint){
//                         s += "*"
//                     }else(s += " ")
//                 }
//             }

//             else{s += " "}
//             rightCol=1;
//         }
//     leftCol=0;
//     rowSize-=1;
//     console.log(s)
//     s = "";
//     }
// }
// triangle(5)
// console.timeEnd()
// console.time()
// let n;
// let string = "";
// function triangle(n) {

//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= n-i; j++) {
//             string += " ";
//         }
//         for (let k = 1; k <= 2*i; k++) {
//             if (i === n && k <= n) {
//                 string += "* ";

//             } else {
//                 if (k === 1 || k === 2*i-1 && i != n) {
//                     string += "*";
//                 } else { string += " "; }
//             }
//         }
//         string += "\n"
//     }
//     return string;
// }
// console.log(triangle(5))
// console.timeEnd()

// let obj = {
//     jk: function () {
//         console.log("hello");
//     }
// }
// let map = new Map();
// map.set(
//     "jk", function () {
//         console.log("hello");
//     })

// console.log(obj)
// console.log(map)

// map.get("jk")()

//Q. 
// var library = [ 
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title:  'Mockingjay: The Final Book of The Hunger Games', 
//         readingStatus: falseme = name;
//     if(library[key].author === "Steve Jobs")
//     {
//         console.log(library[key]);
//     }
// }
// console.log(library[0])

//Q. 
// console.time()
// let arr = [12,32,-12,71,12,-2,23];
// function shorting(arr){
//     for(let i=0 ; i<arr.length; i++)
//     {
//         for(let j=i+1; j< arr.length; j++){
//         if(arr[i] > arr[j]){
//             [arr[i] , arr[j]] = [arr[j],arr[i]]
//         }}  
//     }
// }
// shorting(arr);
// console.timeEnd();
// console.log(arr)

// let arr = [1,2,3,4,5]
// let item =[0,9,8]
// let del = [0,2,4]
// arr.push(...item)
// arr[3] = 22

// console.log(arr)

//Q
// function cut(arrname,start, end ,array) {
//     console.log(array)
//     let gap = end -start;
//     for(i =start; i< arrname.length ; i++ ){
//         if(arrname[i+gap+1] === undefined)
//         {
//             for (let j = i; j < arrname.length; j++)
//             {
//                 delete arrname[j]
//             }

//             return arrname;
//         }
//         arrname[i] = arrname[i+gap+1]   
//     }
//     if(start >= arrname.length){
//         return arrname;
//     }
// }
// arr = [1,2,3,4,5,6]
// console.log(cut(arr ,2,3,["hello",2,4,6,7]))

// testing
// function cut(arrname,start, end ,array) {
//     if(start > end){
//         return "Somthing Went Wrong!!!"
//     }
//     let arr2 = [];
//     for(let i = arrname.length ; i> end+1; i--){
//             arr2.unshift(arrname.pop());
//         }
//     arrname.length = start;
//     arrname.push(...array,...arr2)
//     return arrname;
// }
// arr = [1,2,3,4,5,6]
// console.log(cut(arr ,1,2,["hello",2,4,6,"bye-bye"]))

//testing 2
// function cut(arrname, start, end, ...array) {
//     console.log(typeof arrname)
//     if (start > end || typeof start != typeof end) {
//         return "Somthing Went Wrong!!!"
//     }
//     let arr2 = [];
//     for (let i = arrname.length; i > end + 1; i--) {
//         arr2.unshift(arrname.pop());
//     }
//     arrname.length = start;
//     arrname.push(...array, ...arr2)
//     return arrname;
// }
// arr = [1,2,3,4,5,6]
// console.log(cut(arr,1,2,"hello",2,4,6,"bye-bye"))

// let arr1= [1,2,3,4,5];
// let arr2= [10,9,8,7,6];
// [arr1,arr2] = [arr2,arr1];
// console.log(arr1);
// console.log(arr2);

// let a = new Number(10);
// let b = new Number(10);
// let c = a;
// let a = [1,2,3,4,5]
// let b = [1,2,3,4,5]
// let c = a;
// let a = function(){return 1+1}
// let b = function(){return 1+1}
// let c = a;
// console.log(a===c)

// let obj = {
//     name : "rajnish",
//     lname: "kumar",
//     age : 18,
// }
// let map = new Map();
// map.set("name","rajnish")
// map.set("lname","kumar")
// map.set("age",18)

// for(const key of obj){
//     console.log(key)
// }

// for(const [key,value] of map)
// {
//     console.log(value)
// }
// for(const key in map){
//     console.log(key)
// }


// {
//     obj1 = {
//         name: "rajnish",
//         obj2: {
//             lname: "kumar",
//             arr: [12, 18, { gender: "male", phone: 123 }]
//         }
//     }
// }
// console.log(obj1.obj2.arr[2].phone);
// const { name, obj2 } = obj1
// const { lname, arr } = obj2

// console.log(name, obj2, lname, arr)

/**/
// class obj {
//    function obj(title , id){
//         this.title = title,
//         this.id = id,
//         this.mob = new Date();
//     }
// }
// let arr = [];
// for(let i=0; i<10; i++){
//     arr.push({
//         title: `title ${i}`,
//         id: i,
//         mob: Date.now(),
//     })};

// let index = arr.findIndex((key)=>{
//     return key.title == "title 2"
// })
// delete arr[index]
// console.log(arr[index+1])

// const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
// const obj = JSON.parse(text, function (key, value) {
//   return key += "hello";
// });
// console.log(obj)

// const obj ={
//   fun1(x){
//     return 575
//   },
//   fun2(){
//    return  this.fun1() -"75"
//     }
// }
// console.log(obj.fun1() , obj.fun2())

/*         Promises    */
// const promises = new Promise(function(resolve , reject){
//   setTimeout(() =>{
//     let x = [1,2,3,4];
//     if( x[0] > 0 ){
//     resolve(x);
//     }
//     else{
//       reject(x + 10)
//     }
//   },2000)
// })

// console.log(promises);

// promises
// .then((x) => {
//   console.log(x.map(value => {
//    return value + 1;
//   }))
// })
// .then((x) => {
//   x += 5;
//   console.log(`x ${x}`);
// })
// .catch( (x) => {
//   console.log(`x ${x}`)
// })

// async function p1() {
//   const p2 = await new Promise((resolve) => setTimeout(() => {
//     resolve(" p2 promise resolve!!!")
//   }, 2000));
//   // console.log(p2)
//   return "  p1 promise resolve!!  " + p2;
// }

// p1().then((x) => console.log(x))
// console.log(p1)

let arr = [1, 2, 3, 4, 5, 6, 7, 8]
let arr2 = [5, 6, 7, 8]
// console.log(arr.map((value, index, array) => {
//     index+=2;
//     return array[index]
// }));
// arr = arr.concat(2);
// arr = arr.join(arr2)
//  let arr3 = arr.flat(1)
// let a = arr.forEach((value) => {
// //    let v = {name : "raj"}
//    console.log(this)
//  })
// let num = 1234;
// let bolean = true;
// const obj ={
//     a: 1,
//     b: 2,
//     c: 3,
// }

// // arr2 = arr.forEach((value, index, array) => array.push(2))
// for (const key in obj) {
//     console.log(key , obj[key])
// }

// arr.forEach( (value , index)=> {
//     if(value < 4){
//         console.log(value)
//         // break
//     }
//     else{
//     console.log("break")
//     arr.length = index + 1}
// })
// arr.length = 9
// console.log(arr);

// console.log(obj[])
// console.log(num.toString().includes(2) + false)
//      every , some , findindex , indexof , find , forEach , break , object.keys , object.value 

let obj = {
    name: "rajnish",
    lname: "kumar",
}
// for(let [k ,v] of Object.entries(obj)){
//     console.log(k);
// }
// let a = Object.values(obj).indexOf('kumar')
// console.log(a)
// let i = 0;
// let a = arr.every((value) => {
//     if(value > 4){
//         i+=1;
//         return true;
//     }
//     return false;
// })
// console.log(a , i)

// let array = new Array(3).fill({});
let array = [1, 42, 100,33, 4, 5 ]
console.log(array[-1]);
// array[4] = {};
// array[4]['hi'] = "hi"
// let array = new Array(4);
// for(let i = 0 ; i< array.length ; i++) {
//     // console.log(array[i])
//     array[i] = new Array(4).fill(i)
// };
// console.log(array);

// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// function isPrime(num) {
//   for (let i = 2; num > i; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return num > 1;
// }

// console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]

const fruits = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * Filter array items based on search criteria (query)
 */
// function filterItems(arr, query) {
//   return arr.map((el) =>  {
//     if(el.includes(query)){
//     return el.toUpperCase();
//   }
//   return false
//   })
// }

// console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
// console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']
// console.log(array.map(value => value = 3))
// console.log(array);
// console.log(array.indexOf())

// let a = Array.of([0,0,0,"adsda"]).flat(1);
// let a = array.reverse()
// let a = array.splice(1,4,4,5,56)
// console.log(a ,  array)
    // sum += arr.filter( ( value ) => value % 2 === 0)

// let a = array.toS
// console.log(array)
// const months = ["Mar", "Jan", "Feb", "Dec"];
// const sortedMonths = months.toSorted();
// console.log(sortedMonths); // ['Dec', 'Feb', 'Jan', 'Mar']
// console.log(months); // ['Mar', 'Jan', 'Feb', 'Dec']

// const values = [1, 10, 21, 2];
// const sortedValues = values.toSorted((a, b) => a - b);
// console.log(sortedValues); // [1, 2, 10, 21]
// console.log(values); // [1, 10, 21, 2]
console.log(array.toString())