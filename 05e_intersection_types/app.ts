/* In Typescript, Although intersection and union types are similar, they are employed in completely different ways.
 An intersection type is a type that merges several kinds into one. This allows you to combine many types to 
 create a single type with all of the properties that you require. An object of this type will have members 
 from all of the types given. The ‘&’ operator is used to create the intersection type. */


interface Student {
    student_id: number;
    name: string;
  }
    
interface Teacher {
    teacher_Id: number;
    teacher_name: string;
}
    
type intersected_type = Student & Teacher;
    
let obj1: intersected_type = {
    student_id: 3232,
    name: "rita",
    teacher_Id: 7873,
    teacher_name: "seema",
};
    
console.log(obj1.teacher_Id);
console.log(obj1.name);


//

interface parents {
    fathername : string,
    motherName : string,
}

interface children { 
    daughtername : string,
    sonsnName: string,
}

type Intersected_type2 = parents & children

let family : Intersected_type2 = {
    fathername : "zam",
    motherName : "Sam",
    daughtername : "zar",
    sonsnName: "tam",
}

console.log(family.motherName);
console.log(family.sonsnName);