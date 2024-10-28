let value = {
  myObj: [1, 2, 3, 4, 4],
};
// var ,let ,const

const targetFirstValueInputBox = document.getElementById("firstValue");
const targetSecondValueInputBox = document.getElementById("secondValue");
const targetSubmitBtn = document.getElementById("submitBtn");

console.log(targetFirstValueInputBox.value);

targetSubmitBtn.addEventListener("click", getResult);

function getResult(a = 0, b = 0) {
  // let sum = tarrget1Value + targetSeocendValue
  // return  sum
  const result = document.getElementById("result");

  let firstIntValue = parseInt(targetFirstValueInputBox.value, 10);
  let secondIntValue = parseInt(targetSecondValueInputBox.value, 10);

  let sum = firstIntValue + secondIntValue;

  result.innerHTML = sum;

  return a + b;
}

console.log("Hello Java Script", targetFirstValueInputBox);

// 1st inputs ko target karo  2 dono input target hone ke baad
//  button ko target kro
// btn trget krne ke baad isPr functionaality bnao ki yeah value kaa
//  sum krlee

// or fir  Result show kr de result me outPut show krne ke liye hme Resule
// wali place ko bhi target krna pdega
