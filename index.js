// Creating a class with constructor
class student {
    constructor(name){
        this.name = name;
    }
    introduce() {
        return 'I am ' + this.name;
      }
}

//Child class
class teacher extends student{
    constructor(name, teacher) {
        super(name);
        this.teacher = teacher;
      }
      show() {
        return this.introduce() + ', my teacher is ' + this.teacher;
      }
}

//Creating object
let myTeacher = new teacher("Zoya", "Neha");
//Accessing class and method using object
document.getElementById("para").innerHTML = myTeacher.show();