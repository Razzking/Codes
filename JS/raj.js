// sorting & reduce & encapsulation , diffrene between Git and Github , String to Array , basic use of terminal,

// let arr2 = arr.map( (value) => {value.a=5; return value;})
// console.log(arr2, arr)

// let arr2 = arr.filter( (value) => value.b > 3);
// console.log(arr2)

// arr.sort()


// function sum(s,...arr){
//     console.log(s , arr)
// }
// sum(1,3,6,6,8)
// const obj = [{ a: 1, b: 2 }, { a: 3, b: 4 }]
// const str = JSON.stringify(obj)
// let arr = JSON.parse(str)

// const obj =  `[{ "a": 1, "b": 2 }, { "a": 3, "b": 4 }]`
// // const str = JSON.stringify(obj)
// let arr = JSON.parse(obj)

// console.log( arr , typeof arr)


// let arr = new Array(3).fill({})

// let arr2 = arr.map((value, index) => ({ a: index * 2, b: index * 3 }))

// arr2.sort( (a,b) =>  b.b - a.b)
// let arr2 = arr.map((value, index) => {
//     value.a = index * 2
//     value.b = index
//     return value

// })
// let sum =arr2.reduce( (acc , cvalue) => {
//     return acc += cvalue.b;
// }, 0 )

// console.log(sum)

// console.log("Object")

// const obj = new Object();
// let  obj2 =new Object();
// obj2.name= "Rajnish";

// console.log(obj);
// obj.name = "rajnish Kumar";
// // console.log(typeof obj , obj ,obj instanceof Object ) ;
// obj.name= obj2;
// console.log(obj2.name)
// console.log(obj.name);
// console.log("Array")
// const arr = [1,2,3]
// console.log(arr);
// arr[1] = 10
// console.log(arr)

// let names = "rajnish";
// let lname = "kumar";

// [names , lname] = [lname , names]
// console.log(names , lname)

// console.log("Array 2")
// const arr1 = [1,2,3,4];
// const arr2 = ["r","a","j","n"];
// try {
    
//     [arr1 , arr2] = [arr2 , arr1]
//     console.log( arr1 , arr2) 
// } catch (error) {
//     console.log("Assignment to constant variable.")
// }

const urls = ['https://jsonplaceholder.typicode.com/posts/1', 'https://jsonplaceholder.typicode.com/posts/2']

// let hell = () => ({names: "raj"})
// console.log(hell())

async function fetchdata( url ){
    const res = await fetch(url)
    return await res.json();
}
// const name = () => (console.log("ftftf"));
// name();

async function multifetch( urls ){
  const result = urls.map( async ( url )=>{
    const data = await fetchdata( url );
    return await data;
  })
    // result.push( data);
    setTimeout( () => console.log(result), 2000)
  }
// }
// async function multifetch( urls ){
//     const result = [];
//     for(const url of urls){
//       const data = await fetchdata( url );
//       result.push( data);
//     }
//     console.log(result)
//   }
multifetch(urls)