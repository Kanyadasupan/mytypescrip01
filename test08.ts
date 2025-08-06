//Class-Instance(Object)
class Student{
    //data(poperty/attribute/field) - ตัวแปร
    fname : string =''
    age : number = 0

    //constructor - ฟังก์ชันที่ทำงานเมื่อสร้าง Instance ของ Class
    constructor(){
        console.log(`DTI-SAU`)
    }

    //method - ฟังก์ชัน
    showInfo(){
        console.log(`Hi...${this.fname}`)
        console.log(`Your age...${this.age}`)
    }
}

let ob1 = new Student() //สร้าง Instance ของ Class
let ob2 = new Student()

ob1.fname = 'Kanyada'
ob1.age = 21
ob1.showInfo()