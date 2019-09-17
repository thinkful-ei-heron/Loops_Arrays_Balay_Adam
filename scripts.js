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

function repeat(fn, n) {
  for (let i = 1; i <= n; i++) {
    fn();
  }
}

function hello() {
  console.log('Hello world');
}

function goodbye() {
  console.log('Goodbye world');
}

// console.log(repeat(hello, 5));
// console.log(repeat(goodbye, 5));


function filter(arr, fn) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i]) === true) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, (name) => name[0] === 'R');
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean


console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES



