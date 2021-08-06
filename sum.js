// var number = [23, 44, 55, 66, 77, 78];

function MyTotal(number) {
  var sum = 0;
  for (let i = 0; i < number.length; i++) {
    const element = number[i];
    sum = sum + element;
  }
  return sum;
}

var total2 = MyTotal([2, 4, 5, 8, 8]);
console.log(total2);
