/*Sum All Numbers in a Range
We'll pass you an array of two numbers. 
Return the sum of those two numbers and all numbers between them.

function sumAll(arr) {
  return 1;
}
sumAll([1, 4]);

The lowest number will not always come first.

sumAll([1, 4]) should return a number.
sumAll([1, 4]) should return 10.
sumAll([4, 1]) should return 10.
sumAll([5, 10]) should return 45. */

//Use Math.max() to find the maximum value of two numbers.
//Use Math.min() to find the minimum value of two numbers.
//Set a variable with result is equal 0
//loop for array starts from minnumber to maxnumber
//Adding and assing a new value to the result

function sumAll(arr){
  let minNum = Math.min(arr[0], arr[1]);
  let maxNum = Math.max(arr[0], arr[1]);
  var result = 0;
  for (var i = minNum; i<=maxNum; i++){
    result += i; 
    console.log(result)
  }
  return result;
}
console.log(sumAll([5, 10]));

