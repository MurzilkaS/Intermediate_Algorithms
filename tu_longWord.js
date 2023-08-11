/*Find the longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number. For these algorithms you are allowed to use the split() method.

findLongestWord("The quick brown fox jumped over the lazy dog")should return a number.
findLongestWord("The quick brown fox jumped over the lazy dog")should return 6.
findLongestWord("May the force be with you") should return 5.*/

//Create a function, then set a variable to longest word,and a variable with split string;\
//Create loop to iterate through wordsAr array
//Set a variable for individual word is equal to words at position i
//Check if the individual word length is greater than the longest word length then, the longest word is equal to the individual word
//return result

function FindthelongestWord(str){
    let longestWord = "";
    let wordsAr = str.split(" ");
     for (let i = 0; i < wordsAr.length; i ++) {
        let individWord = wordsAr[i];
        //console.log(individWord);
        if (individWord.length > longestWord.length){
            longestWord = individWord ; 
        }
    }
      return longestWord.length;
     }

//console.log(FindthelongestWord("The quick brown fox jumped over the lazy dog"));
console.log(FindthelongestWord("May the force be with you"));