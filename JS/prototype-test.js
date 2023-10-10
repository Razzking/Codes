
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

class user {
    constructor(username, email, pasword) {
        this.username = username;
        this.email = email;
        this.password = pasword;
    }

    fulldetails(x) {
        return ` name = ${this.username} \n email = ${this.email} \n password = ${this.password + x}`
    }
}


class teacher extends user {
    constructor(username, email, pasword, des) {
        super(username, email, pasword)
        this.des = des;
    }
    logME() {
        console.log(this.des)
    }
}

const person = new teacher("rajnish", "raj@gmail.com", 1000, "acp")



const user1 = new user("raj", "degydged", "782781")
person.logME();
// console.log(person.)