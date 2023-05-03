// Given an array X, write a program that would find the maximum value of the array. Your program should work also work with negative values (eg. X = [2,-3,-1]) and zero.

// pseudocode
// 1 - Defining an array with the variable.
// 2 - Using function to calculate the maximum value of an array.
// 3 - For loop to iterate the array Elements.
// 4 - If condition to check the maximum value between two numbers.
// 5 - Displaying the maximum value from the array on console.

//code

let X = [2,-3,-1];
function largest(X) {
   
    
    let max = X[0];

    for (let i = 1; i < X.length; i++) {
        if (X[i] > max)
            max = X[i];
    }
     
    return max;
}
console.log("Max in given array is " + largest(X));

// diagram
// 1 - max=2, i=1, -3!>2, i++
// 2 - max=2, i=2, -1!>2, i++
// 3 - max=2, i=3,  3<3=false
// 4 - Returns maximum value as 2 and prints on console.