//3. No paramiter, has return
//ควรจะใส่ return type เสมอ (string, number, boolean)
function funC() : string{
    console.log("Woo...")
    return `I Love U`
}


//4. have paramiter, has return
function funD(n1: number, n2: number, n3: number) : number {
    return n1 + n2 + n3;
}

console.log(funC())
let result : number = funD(10, 20, 30)
console.log(result)