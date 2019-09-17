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


//console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;
  return function (location) {
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}`);
    if (warningCounter === 1) {
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today!`);
    }
    if (warningCounter === 0 || warningCounter >= 2) {
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
    }
  };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const floodWarning = hazardWarningCreator('Flooding everywhere');
const earthquakeWarning = hazardWarningCreator('Earthquake happening now');

console.log(rocksWarning('main st and pacific ave'));
console.log(rocksWarning('church st and orange ave'));
console.log(floodWarning('all over the damn place'));
console.log(floodWarning('only in pacific beach'));
console.log(earthquakeWarning('san diego and la'));
console.log(earthquakeWarning('san francisco and sacramento'));



