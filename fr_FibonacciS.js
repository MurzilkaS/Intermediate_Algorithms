 /*Fibonacci Sequence
A great friend of yours, Fibonacci, just came up with a sequence of numbers that is really easy to compute. 
However, his time allows him to calculate by hand only the first 10-15 terms of the sequence; of course,
 he is busy trying to come up with some other interesting sequence. So he gives you the first terms and 
 asks you to write an algorithm that will return the n-th term in the sequence.
His sequence looks like this: 1 1 2 3 5 8 13 21 34 ...
Immediately you find the pattern: setting the first two terms to be 1, 
any other term is the sum of the two previous terms. 1+1=2, 1+2=3, 2+3=5, 3+5=8, 5+8=13 and so on.
In this way, if n would be equal to 4 your result should be 3; but if n is 7, then the result is 13.
But these are small numbers, which can be computed by hand. What about bigger numbers? 
Let's see what results you will get for the following n's:
n = 43 -> x
n = 101 -> x
n = 227 -> x
n = 491 -> x
n = 881 -> x  */

//create a function para as a number
//x representing the first term
//y representing the seconde term
//z representing the sum x and y
//create loop
// write the terms


function Fibonacci(num){
    let x =0;
    let y =1;
    let z;
    for (let i=0; i<num; i++){
    z = x+y;
    x=y;
    y=z; 
    }
    return y ;
}
let num = 881;
console.log(Fibonacci(num));
