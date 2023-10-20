
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

let arr = [1,2,3,4,5]
// try {arr.forEach( (value) => {
    
    //     if(value  < 3 ){

    //     console.log('E')           // arr.push(value)
    //     }else { throw new Error("forEach break");}
    // })
    
// }catch (error) {
        // console.log(error.message)
// }
arr.forEach((item)=>{
    switch(item){
        case 3:
            break
        default :
            console.log(item);
    }
})
// console.log( arr );
// arr.forEach((item,ind)=>{
//     if(item ===3){
//         arr.length=ind;
//     }
//     console.log(item,ind);
// })
// console.log(arr)