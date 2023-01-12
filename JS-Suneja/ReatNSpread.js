// Rest and Spread Operstors

// Examples Rest
function addNumber(a, b, c, ...other) {
  console.log(other[1]);
  return a + b + c;
}
const res = addNumber(2, 5, 6, 7, 8, 9);
console.log(res);

// Example spread
const names = ["awais", "chaus", "yafai"];
function getNames(name1, name2, name3) {
  console.log(name1, name2, name3);
}
// getNames(names[0], names[1], names[2]);
getNames(...names);

// with Object Rest

const students = {
  name: "awais",
  age: "28",
  hobbies: ["cricket", "singing"],
};
const { ...rest } = students;
console.log(rest);

// with object spread

const newStudent = {
  ...students,
  age: "28",
};
console.log(newStudent);
