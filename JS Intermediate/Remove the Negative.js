//Given any array X, for example [1,-2,4,1], remove the negative numbers, so that the output becomes: [1,4,1].

//psedocode
// 1- Define array element by variable.
// 2- Define empty array.
// 3- For loop to iterate the array elements.
// 4- If statement to check if the number is greater than 0, and if it is greater then push to an empty array.
// 5- Display the result on console.

//code
let x = [1,-2,4,1];
let newX = [];
for(i=0; i<x.length; i++){
    if(x[i]>0)
    newX.push(x[i]);
}
console.log(newX);

//diagram
// 1- i=0, 1>0 = true, Result = 1.
// 2- i=1, -2>0 = false, Result =1.
// i=3, 1>0 = true, Result = 1,4,1.