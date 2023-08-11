/*Title Case a Sentence
Return the provided string with the first letter of each word capitalized.
 Make sure the rest of the word is in lower case.
For the purpose of this exercise, 
you should also capitalize on connecting words like "the" and "of".
For this algorithm, you can use the split() method.

titleCase("I'm a little tea pot")should return a string.
titleCase("I'm a little tea pot")should return "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt") should return "Short And Stout".*/

function titleCase(str){
    let result = "";
    let words = str.split(" ");
    for (let i=0; i<words.length; i++){
        let word = words[i];
        for (let j =0; j<word.length; j++){
          if (j=== 0){
            result += word[j].toUpperCase();
          } else{
            result += word[j].toLowerCase();
          }
        }
        if (words.length - 1 !==i){
            result += " ";  
        }  
    }
    return result;

    }
console.log(titleCase("I'm a little tea potnode "));