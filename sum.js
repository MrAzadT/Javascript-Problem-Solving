// var number = [23, 44, 55, 66, 77, 78];

// function MyTotal(number) {
//   var sum = 0;
//   for (let i = 0; i < number.length; i++) {
//     const element = number[i];
//     sum = sum + element;
//   }
//   return sum;
// }

// var total2 = MyTotal([2, 4, 5, 8, 8]);
// console.log(total2);

// // ====Finding largest integer in an array in JavaScript
// function MyTotal(number) {
//   var largest = 0;
//   for (let i = 0; i < number.length; i++) {
//     if (number[i] > largest) {
//       largest = number[i];
//     }
//   }
//   return largest;
// }

// var total2 = MyTotal([2, 4, 5, 8, 18]);
// console.log(total2);

// // ==== Fibonacci
// var fibo = [0, 1];
// for (let i = 2; i < 10; i++) {
//   fibo[i] = fibo[i - 1] + fibo[i - 2];
// }
// console.log(fibo);

function fibonacci() {
  let fibo = [0, 1];
  for (let i = 2; i < 20; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}
console.log(fibonacci());
