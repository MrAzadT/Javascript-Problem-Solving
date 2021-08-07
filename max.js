// function maxNum(num) {
//   var max = num[0];
//   for (let i = 0; i < num.length; i++) {
//     const element = num[i];
//     if (element > max) {
//       max = element;
//     }
//   }

//   return max;
// }
// var nam = [12, 34, 556, 7, 8867];
// console.log(maxNum(nam));

// ====min

function maxNum(num) {
  var min = num[0];
  for (let i = 0; i < num.length; i++) {
    const element = num[i];
    if (element < min) {
      min = element;
    }
  }

  return min;
}
var nam = [12, 34, 556, 7, 8867];
console.log(maxNum(nam));
