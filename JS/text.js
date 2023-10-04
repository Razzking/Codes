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
// let sep = "54"
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

// function triangle(triangleSize) {
//     let rowSize=triangleSize;
//     let leftCol,rightCol,row;
//     let s = " ";

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
//     s = " ";
//     }
// }
// triangle(5)

// let n;
// let string = "";
// function triangle(n) {

//     for(let i=1; i<=n ; i++){
//         for(let j=1; j<= n-i; j++){
//             string+=" ";
//         }
//         for(let k=0 ; k < 2*i-1; k++){
//             if(i===n && k < n){
//                 string+="* ";
//             }
//             else{
//                 if( k===0 || k=== 2*i-2  && i!=n ){
//                     string+="*";
//                 }else{string+=" ";}
//             }
//         }
//         string+="\n"
//     }
// return string;
// }
// console.log(triangle(10))

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
//         readingStatus: false
//     }];
// for(key in library){
// // console.log(key)
//     if(library[key].author === "Steve Jobs")
//     {
//         console.log(library[key]);
//     }
// }
// console.log(library[0])

//Q. 
let arr = [12,32,-12,71,12,-2,23];
function shorting(arr){
    for(let i=0 ; i<arr.length; i++)
    {
        for(let j=i+1; j< arr.length; j++){
        if(arr[i] > arr[j]){
            [arr[i] , arr[j]] = [arr[j],arr[i]]
        }}  
    }
}
shorting(arr);
console.log(arr)
