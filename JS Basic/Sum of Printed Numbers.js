// Write a program that will print all the numbers from 1 to 135 AND the sum of the numbers that have been printed so far. Your output should look similar to this:

// Number is: 0 Sum: 0

// Number is: 1 Sum: 1

// Number is: 2 Sum: 3

// Number is: 3 Sum: 6


//pseudocode
// 1 - For loop for the numbers 1 to 135.
// 2 - Defining sum variable to store the added numbers.
// 3 - Displaying the result using console.

//code
let sum = 0;
for(var i=1;i<136;i++)
{
   sum = sum+i;
   console.log(`Number is: ${i}; Sum: ${sum}`);
}

//Diagram
// 1 - i=1, sum=0+1=1, Number is:1; Sum:1
// 2 - i=2, sum=1+2=3, Number is:2; Sum:3
// 3 - i=135, sum=9045+135, Number is:135; Sum:9180
// 4 - i=136, 136 is not less than 136, loop exit.