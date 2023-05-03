// Given an array X, write a program that will return the average value of all elements in the array. For example, for array X = [2,1,3] your output should be 2.

// psedocode
// 1 - Defining an array with the variable.
// 2 - Using function to calculate the average of array elements.
// 3 - Defining the total variable to store the added array elements.For loop to add the array elements.
// 4 - Divide the value of added array elements with array length to get the average.
// 5 - Print on console.

//code
let X=[2,1,3]
function Avg(X){
    var total = 0;
    for(var i = 0;i < X.length; i++) { 
        total+=X[i];
    }
    return total/X.length;
}
console.log(`Average of given numbers is: ${Avg(X)}`);

// diagram
// 1 - total=0, i=0, total=0+2=2
// 2 - total=2, i=1, total=2+1=3
// 3 - total=3, i=2, total=3+3=6
// 4 - total=4, i=3, 3<3=false, loop ends, returns 6/3=2