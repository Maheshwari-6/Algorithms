// Given an array X, write a program that will remove all negative numbers and replace them with a 0. For example, for array X = [2,-1,4,-3] the output of your program should be [2,0,4,0].

// pseudocode
// 1 - Defining an array with the variable.
// 2 - For loop to iterate the array elements.
// 3 - If statement to check whether the array element is negative, and if it is negative then replace it zero.
// 4 - Displaying the result on console.

//code
const X = [2,-1,4,3];

for(let i=0; i<X.length; i++){
    if(X[i] < 0){
        X[i] = 0;
    }
}
console.log(X);

// diagram
// 1 - i=0, 2<0 = false, i++, Result = 2
// 2 - i=1, -1<0 = true, X[1]=0, Result = 2,0
// 3 - i=2, 4<0 = false, i++, Result = 2,0,4
// 4 - i=3, 3<0 = false, i++, Result = 2,0,4,3
// 5 - i=4, 4!<array length, loop exit.