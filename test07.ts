//Function optional Paramiter คือ จะรับค่า argument หรือไม่ก็ได้
//optional ต้องใส่เครื่องหมาย ? หลังชื่อ parameter
function fun01(n1: number, n2:number, n3?: number){
    if(typeof n3 != 'undefined'){
        console.log(n1 + n2 + n3);
    }else{
        console.log(n1 + n2);
    }
}

fun01(10, 20); //ไม่ใส่ n3
fun01(10, 20, 30); //ใส่ n3

//Function : Default Parameter
function fun02(n1: number, n2:number, n3 : number = 100){
    console.log(n1 + n2 + n3);
}
fun02(10, 20, 30); //ใส่ n3
fun02(10, 20,); //ไม่ใส่ n3 จะใช้ค่า default 100