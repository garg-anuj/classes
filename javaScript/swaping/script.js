// nested loop flow explanation

let arr = [44, 2, 5, 7, 8, 3, 9]; // [2,3,5,7,8,9,44]
// assending
[2, 44, 5, 7, 8, 3, 9];

// arr[0]
//     arr[1,2,3,4,5,6,]
let temp;
// a[0] 2
// a[1] 44
// a[2] 5
// 2>7 false 
// 2>7 false
//  2>8 false
//  2>9 false
if (arr[1] > arr[2]) {
  temp = arr[0];
  arr[0] = arr[1];
  arr[1] = temp;

  console.log("haa hai bda number");
} else {
  console.log("hi number chota hai");
}


console.log(arr);

// ----------------------------------------------------
for (let i = 0; i < 5; i++) {
  arr[0];

  for (let j = ; j <= 5; j++) {
    let temp;
    if (arr[0] > arr[1]) {
      temp = arr[0];
      arr[0] = arr[1];
      arr[1] = temp;

      console.log("haa hai bda number");
    } else {
      console.log("hi number chota hai");
    }
  }
}
