'use strict';

function max(numbers) {
  if (numbers.length < 1) {
    return undefined;
  }
  let i = 0;
  let largest = numbers[0];
  while (i < numbers.length) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
    i++;
  }
  return largest;
}

function min(numbers) {
  if (numbers.length < 1) {
    return undefined;
  }
  let i = 0;
  let smallest = numbers[0];
  while (i < numbers.length) {
    if (numbers[i] < smallest) {
      smallest = numbers[i];
    }
    i++;
  }
  return smallest;
}


function average(numbers) {
  let total = 0;
  numbers.forEach(function(num) {
    total = total + num;
  });
  return total / numbers.length;
}

console.log(average([1, 2, 3]));




