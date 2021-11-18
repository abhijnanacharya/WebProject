class Student{
    constructor(name, age, marks){
        this.name = name;
        this.age = age;
        this.marks = marks;
    }

    setPlacementAge(minAge){
        return (minMarks) => {
            if(minMarks<this.marks && minAge<this.age){
                console.log(`${this.name} is eligible to sit for placement`);
            }else{
                console.log(`${this.name} is NOT eligible to sit for placement`);
            }
        }

    }

}


let abc=new Student('abc',22,60);
let def=new Student('def',17,40);
let ghi=new Student('ghi',25,30);

abc.setPlacementAge(18)(50);
def.setPlacementAge(18)(50);
ghi.setPlacementAge(18)(50);