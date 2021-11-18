class Student{
    static ccount =0;
    
     static increaseCount(){return Student.ccount++;}
    constructor(name,age ,phno, marks){
        this.name = name;
        this.age = age;
        this.phno = phno;
        this.marks=marks;
        Student.increaseCount();
        
    }
    static getCount(){return Student.ccount;}
    getEligibilityStatus(){
        if(this.marks>40){
            console.log(`${this.name} of Age ${this.age} Ph No.: ${this.phno} is Eligible`);
        }else{
            console.log(`${this.name} of Age ${this.age} Ph No.: ${this.phno} is NOT Eligible`);
        }
    }

}
let Rahul=new Student('Rahul',21,12345678, 55);
Rahul.getEligibilityStatus();
let Alec=new Student('Alec',22, 19543432, 25);
Alec.getEligibilityStatus();

console.log(Student.getCount());