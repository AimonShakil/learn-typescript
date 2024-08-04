"use strict";
/* In Typescript, Although intersection and union types are similar, they are employed in completely different ways.
 An intersection type is a type that merges several kinds into one. This allows you to combine many types to
 create a single type with all of the properties that you require. An object of this type will have members
 from all of the types given. The ‘&’ operator is used to create the intersection type. */
let obj1 = {
    student_id: 3232,
    name: "rita",
    teacher_Id: 7873,
    teacher_name: "seema",
};
console.log(obj1.teacher_Id);
console.log(obj1.name);
let family = {
    fathername: "zam",
    motherName: "Sam",
    daughtername: "zar",
    sonsnName: "tam",
};
console.log(family.motherName);
console.log(family.sonsnName);
