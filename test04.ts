//functionถ้าไม่เรียกจะไม่มีอะไรแสดง
//Function มี 4 ประเภท

//1. Function ที่ไม่มี parameter และไม่มี return
function funA() {
    console.log("Hi...")
}

//2. Function ที่มี parameter แต่ไม่มี return
function funB(param1 : number ,param2 : string){
    console.log(param1)
    console.log(param2)
}
funA()
funB(100, `Wow wow wow`) //argument
//funB(200, 300) //error เพราะ type ไม่ตรง