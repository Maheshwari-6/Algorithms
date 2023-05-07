// Declare a function isPalindrome(str) that takes a string as an input.

// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

//pseudocode
// 1- Function to carry out the repetative task.
// 2- For loop to iterate the string letters.
// 3- If statement to check the palindrome condition. 
// 4- Print the result on console.

//code
//Solution 1
function isPalindrome(str){
    const len = str.length;

    for(let i=0; i<len/2; i++){
        if(str[i] !== str[len-1-i]){
            return "It is not a palindrome word."
        }
    }
    return "It is a palindrome word."
}

const str="madam";

const result = isPalindrome(str);
console.log(result);

//Solution 2
// function isPalindrome(str){
//     const str2 = str.replace(/\W+|_/g, "").toLowerCase();

//     const arrayValues = str2.split('');

//     const reverseArray = arrayValues.reverse();

//     const reverseString = reverseArray.join('');

//      if(str2 == reverseString){
//         console.log("It is a palindrome word.");
//      }else{
//         console.log("It is not a palindrome word.");
//      }
// }

// const str="madgtjam";
// isPalindrome(str);


//diagram
// 1- i=0, 0!==4 - m !== m - false, i++.
// 2- i=1, 1!==3 - a !== a - false, i++.
// 3- i=2, 2!==2 - d !== d - false, i++.
// 4- i=3, i<len/2 = false, loop exit.