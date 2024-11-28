// let var const  these are variables

let obj = {};
let arr = [];

function functionName() {
  // normal function
  const arrowFunction = () => 2 + 3; // created a arrow function
  const arrowFunction1 = () => {
    return 2 + 3;
  };
  console.log(arrowFunction());
  return;
}

functionName();

// ----------------------------------
// dataTypes  primitive / non-primitive
//  string , number , boolean
//  defined , undefined, not defined, null

function sum(a, b) {
  return a + b;
}

let data;
console.log(data);

let str = "total cost is" + 422 + 22 + " " + "Rs";
let strBackticks = `total cost is ${sum(422, 23)} Rs`;

console.log(str);
console.log(`${strBackticks} = ${strBackticks.length} ${strBackticks[1]}`);



// ------------------------------------------------------------

