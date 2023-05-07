// Having an array of numbers, write an algorithm that will return the 3rd highest number in the array. Your algorithm should do only one iteration of the array (just one for/while loop).

// Example:

// Using the array [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31], the correct answer is : 11


//pseudocode
// 1- In function get an input. 
// 2- Declare the first, second, third element. 
// 3- For loop
// 4- If statement - a) check input[i] > first.
//                      first = input[i], second = first, third = second.
//                   b) check input[i] > second. 
//                      second = input[i], third = second. 
//                   c) check input[i] > third. 
//                      third = input[i]. 
// 5- return third. 
// 6- Array to test our code.


//code
function thirdHighest(input){
    let first =0;
    let second = 0;
    let third = 0;

    for(let i=0; i<input.length; i++){
        if(input[i] > first){
            third = second;
            second = first;
            first = input[i];

        }else if (input[i] > second){
            third = second;
            second = input[i];
        
        }else if(input[i] > third){
            third = input[i];
        }

    }
    return third;
}
console.log(thirdHighest([5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31]))


//diagram
// 1- i=0, input[0]=5 > first, third = 0, second = 0, first = 5, i++.
// 2- i=1, input[1]=2 > 5 is false, 2 > 0 is true, third = 0, second = 2, first = 5, i++.
// 3- i=2, input[2]=8 > 5 is true, third = 2, second = 5, first = 8, i++.
// 4- i=3, input[3]=20 > 8 is true, third = 5, second = 8, first = 20, i++.
// 5- ...... i=10, input[10]=31 > 20 is true, third = 11, second = 20, first = 31, i++.
// 6- i=11, 11 !< input.length, return third, Result = 11.