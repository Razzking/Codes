
/*          sum al even Numbers             */

// functirn arr.reduce( (acc ,cvalue ) => {
//         if(cvalue %2 === 0 && cvalue > 0){
//             return acc + cvalue;
//         }
//         return acc += 0;
//     }, 0)
// } 
// console.log(fun([2,-5,3,2,-3,-2,4 ,-100]));

/*      Shorting Of Array Of Object by Object Keys value        */

// let arr = [{x:"121", y:23},{x:"fwef", y:576},{x:"grg", y:1},{x:"1bvxc21", y:21},]
// // console.log(arr.sort())
// console.log(arr.sort( (a, b) => b.y - a.y))

/*          squarePositiveNumbers           */

// function squarePositiveNumbers(arr) {
//    let newArr = arr.filter( (value) => value > 0).map( (value) => value*value)
//    return newArr
// }
// console.log(squarePositiveNumbers([1, -2, 3, -4, 5]));

/*      Check Map Method are change an original Array or Not        */

// let arr = [1,2,3,4,5]
// try {arr.forEach( (value) => {

//         if(value  < 3 ){

//         console.log('E')           // arr.push(value)
//         }else { throw new Error("forEach break");}
//     })

// }catch (error) {
//         console.log(error.message)
// }
// arr.forEach((item)=>{
//     switch(item){
//         case 3:
//             break
//         default :
//             console.log(item);
//     }
// })
// console.log( arr );
// arr.forEach((item,ind)=>{
//     if(item ===3){
//         arr.length=ind;
//     }
//     console.log(item,ind);
// })
// console.log(arr)

// const arr2 = [1,2,3,4,5,6,7,8,9]
// let data;
// arr2.reduce((pre, curr)=>{

//     let val = curr - pre;
//     if( val !== 1){
//         data =  pre + 1
//     }
//     return pre = curr
// })
// arr2.splice( arr2.findIndex(1) , 1 )

// console.log( 'missing data  ', data )


// console.log(arr2)


/**
 * PSQ
 */

const arr = [7, 9, 1, 6, 8, 6, 9, 1, 3]

const obj  ={}

for (let index = 0; index < arr.length; index++) {
     if( !obj[arr[index]] ) obj[arr[index]] = 1 
     else  obj[arr[index]]++
}
console.log(obj)
// let result = arr.reduce((acc , crr)=>{
//       if(crr === 9){
//             return ++acc;
//       }
//       return acc
// }, 0);

// for (let i = 0; i < arr.length; i++) {
//       let num =1
//      if(arr[i]) {
//             for (let j = i + 1; j < arr.length; j++) {
//                   if (arr[j] === arr[i]) {
//                         num += 1
//                         arr[j] = null
//                   }
//             }

      // }
      // if(num2 > 1){
      //       continue;
      // }
//       // {)
//       console.log(arr[i], num)
//       // num = 1
// }
// let num = 1;
// let num2 = 1;

// for(let i = 0; i < arr.length ; i++) {
//       for(let j=i+1 ; j < arr.length; j++){
//             if(arr[j] === arr[i]){
//                   num +=1
//             }
//             for(let x=0; x <= j; x++){
//                   if(arr[x] === arr[j]){
//                         num2 +=1
//                   }   
//             }
//       }
//       if(num2 > 1){
//             continue;
//       }
//       console.log(arr[i] , num)
//       num = 1
// }

// console.log(result)


