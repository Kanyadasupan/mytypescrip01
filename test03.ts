//data type (number, string, boolean, object, array)

//number
let data1 : number
data1 = 20


let data2 : string
data2 = "aaa"
data2 = "bbb"
data2 = "ccc"
//console.log(data2) //ccc

//boolean
let data3 : boolean
data3 =true
data3 = false

//string
let data4 : string[] = []
data4[0] = "xxx"
data4[1] = "yyy"
data4[2] = "zzz"
//data4[3] = 55555 //error

//array
let data5 : (string | number | boolean) [] = []
data5[0] = `Hello...`
data5[1] = 111
data5[2] = 222
data5[3] = 333
data5[4] = `Hi...`
data5[5] = true

let data6 : number[] = [10, 20, 30, 40, 50]

//object
let data7 : {name : string, age : number, salary : number} = {
    name : `Kanyada`,
    age : 21,
    salary : 30000.00
}
console.log(data7.name)
console.log(data7.age)
console.log(data7.salary)