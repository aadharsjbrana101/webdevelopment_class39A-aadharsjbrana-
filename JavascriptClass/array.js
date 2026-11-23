const students = [
  { name: "Ram",  marks: 90, age: 20 },
  { name: "Sita", marks: 85, age: 21 },
  { name: "Hari", marks: 55, age: 19 },
  { name: "Gita", marks: 65, age: 22 }
];

// const degree = (name, marks) => {
//     let grade;
//     if (marks >= 70) {
//         grade = "First Division";
// }    else if (marks >= 60) {
//         grade = "Second Division";
// }   else if (marks >= 50) {
//         grade = "Third Division";
// }   else if (marks >= 40) {
//         grade = "Pass";
// }    else {
//         grade = "Fail";
// }
//     return grade;
// }
// console.log(degree("Sita",75));

// const grading = students.map(
//     (student) => degree(student.name, student.marks)
// )
// console.log(grading);

const toppers = students.filter(
    (student) => student.marks >= 70
)
console.log(toppers);

const everyIsTopper = students.every(
    (student) => student.marks >= 70
)
console.log(everyIsTopper);

const someIsTopper = students.some(
    (student) => student.marks >= 70
)
console.log(someIsTopper);

const student = students.find(
  student => student.age === 21
);

console.log(student);

const index = students.findIndex(
  student => student.age === 21
);

console.log(index); 

const totalMarks = students.reduce(
  (total, student) => total + student.marks,0
);

console.log(totalMarks); 

const arr =[20,10,50,90,100];
arr.sort((a,b) => b-a);
console.log(arr);

const sortedStudents = [...students].sort(
  (a,b) => b.marks - a.marks);
console.log(sortedStudents);
console.log(students)

const numbers =[1,2,3,4,5];
numbers.forEach(number => console.log(number + 1))
console.log(numbers.includes(3));
numbers.push(6);
numbers.pop();

const part = numbers.slice(1,3);
console.log(part);

// wap using loop,slice and toUppercase to add DR prefix to the given names in an arr names=["ram","sita","hari","noman"] names[i][0].toUpperCase() + names[i].slice(1) output:Hello, Dr. Ram, Dr. Sita,welcome to the clinic

const names = ["ram", "sita", "hari", "noman"];
for (let i = 0; i < names.length; i++) {
  let name = names[i][0].toUpperCase() + names[i].slice(1);
  console.log(`Hello, Dr. ${name}, welcome to the clinic`);
}

function countdown(n){
  console.log(n);
  if (n>0)
    return countdown(n-1);
}
countdown(5);