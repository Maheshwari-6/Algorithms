//Given the array of strings X = ['Man', 'I','Love','The','Matrix','Program'], replace every letter of the word Program with *, so the output would be ['Man', 'I','Love','The','Matrix','*******']. Then make your algorithm work for any word of your choice

//pseudocode
// 1- Write a function that has arr and word as an arguments.
// 2- Create an empty arr to hold the result. 
// 3- Create an empty string that will be the "*". 
// 4- Loop through the arr. 
// 5- Use if statement to find the target word. 
// 6- If the target word is not in arr, then print Err message. 
// 7- else, loop through the founded word and write a * for each letter. 
// 8- After that push each word to the new arr.

//code
function communist(arr, targetWord) {
  let result = [];
  let stars = "";
  for (let i = 0; i < arr.length; i++) {
    if (targetWord === arr[i]) {
      for (j = 0; j < targetWord.length; j++) {
        stars += "*";
      }
      result.push(stars);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

let X = ["Man", "I", "Love", "The", "Matrix", "Program"];
console.log(communist(X, "Program"));


//diagram
// 1- i=0, Man!=Position, Result = "Man". 
// 2- i=1, I!=Position, Result = "Man", "I". 
// ...i=5, Program=Program, stars="*******", Result = "Man", "I", "Love", "The", "Matrix", "*******".