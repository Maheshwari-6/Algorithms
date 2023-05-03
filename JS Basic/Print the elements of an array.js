// Given an array X = [1,4,2,12], write a program that will iterate through the array and print all numbers on the screen. Your program should work with arrays of all sizes.

// pseudocode
// 1 - Defining an arry with the variable.
// 2 - Using for loop to iterate the array elments.
// 3 - Displaying the numer on console.

// code
let X = [1,4,2,12];
for(let i=0; i<X.length; i++){
    console.log(X[i]);
}

// diagram
// 1 - i=0, i<4, Result = 1
// 2 - i=1, i<4, Result = 1,4
// 3 - i=2, i<4, Result = 1,4,2
// 4 - i=3, i<4, Result = 1,4,2,12