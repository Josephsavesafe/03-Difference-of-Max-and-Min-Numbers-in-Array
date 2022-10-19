function diffMaxMin(arr) {
  let max = arr[0];
  let min = arr[0];
  arr.map((data) => {
    if (data > max) {
      max = data;
    }
    if (data < min) {
      min = data;
    }
  });
  result = max - min;
  return `Smallest number is ${min}
Biggest number is ${max}
Difference number is ${result}`;
}

console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]));
console.log(diffMaxMin([44, 32, 86, 19]));
