// CRUD
let arr;
arr = [1, 2];
let arrNew = ["a", "b"];

arr[1] = 22; // updated value

arr.push(55); // added value in last
arr.push(...arrNew);

delete arr[1];

const removedElement = arr.splice(1, 1);

console.log(removedElement);
console.log(arr[1]);
console.log(arr, arr.length);

let concatedArr = [];

let newItem = concatedArr.concat(["apple"], ["hh"], arr, arrNew);
// concatedArr.splice(0,0,["apple"],["hh"],arr,arrNew)

console.log("concatedArr ==", concatedArr);
console.log(newItem);
