//express function
//Anonymous function
let sum1 = function(n1: number, n2: number) {
    console.log(n1 + n2);
}
//เหมือนกันเขียนได้สองแบบ
//arrow function
let sum2 = (n1: number, n2: number) =>{
    console.log(n1 + n2);
}

//arrow function with return
let sum3 = (n1: number, n2: number) => {
    return n1 + n2;
}

sum1(10, 20);
sum2(30, 40);
console.log(sum3(50, 60));