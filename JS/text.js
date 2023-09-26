// let obj = {
//     name: "raj",
//     lname: "kumar",
// };
// console.log(obj.name);

//  IIFE
    // (()=>{
    //     let name = "raj kumar ";
    //     console.log(`i'm ,${name}`)
    // })();

//  Name IIFE
    // (function(){
    //     let code= "hacker"
    //     console.log(`i'm ,${code}`)
    // })();

// Using spread method to clone object
    // const name = {
    //     fname: "raj",
    //     lname: "kumar"
    // };
    // const clone = { ...name };
    // clone.fname = "rajnish"
    // console.log(name)
    // console.log(clone)

    let name= {
        fname: "raj",
        lname: "kumar"
    }
    const clone = Object.assign(name,{fname: "rajnish"})
    console.log(clone)
    console.log(name)
