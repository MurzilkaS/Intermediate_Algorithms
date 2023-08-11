/*Return an array consisting of the largest number from each provided sub-array. 
For simplicity, the provided array will contain exactly 4 sub-arrays.
Remember, you can iterate through an array with a simple for loop, 
and access each member with array syntax arr[i].

function largestOfFour(arr) {
  // You can do this!
  return arr;  
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
//Returns [5,27,39,1001]
*/


// Create an empty array for max numbers of each subarray
//Loop for main array
// Create a variable Max number to 0 to compare elem. of array
// loop for subarrays
// Compare with the variable max, if the element is greater than max then put that one in the variable
// Push the Max number to the empty array 
// Return the array that has 4 max numbers of each array




function largestOfFour(arr) {
   let result = [];
 
   for (let i = 0; i < arr.length; i++) {
     let subarray = arr[i]; 
     let subArMaxNum = 0;
      for (let j =0; j< subarray.length; j++){
        console.log(subArMaxNum);
        if (subArMaxNum < subarray[j]){
          subArMaxNum = subarray [j]
        }
      }
      result.push(subArMaxNum);
    }
    return result;
   }
console.log(largestOfFour([[4, 5, 1, 3],[13, 27, 18, 26],[32, 35, 37, 39], [1000, 1001, 857, 1]])); 