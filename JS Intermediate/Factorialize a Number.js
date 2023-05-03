// Declare a function factorialize(n) that takes an integer n as input and returns the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Example Outputs:
// factorialize(0) should return 1.
// factorialize(10) should return 3628800.
// factorialize(20) should return 2432902008176640000.

//Pseudocode
// 1- Function to carry out the repetative task.
// 2- If statement to check the condition like 
//     a- if num=0 then return 1 else.
//     b- if num<0 then print the statement ("OOPS! The number is smaller than 0") by using console log else.
//     c-Calculate the factorial on given number.
// 3- Display the result on console log.

//code
function Factorize(num){
    if(num == 0){
        return 1;
    }else  if(num < 0){
        console.log("OOPS! The number is smaller than 0");
    }else{
        return (num*Factorize(num-1));
    }
}
console.log(Factorize(5));

//diagram
// 1- num=5, return 5*Factorize(4). 
// 2- num=4, return 5*4*Factorize(3). 
// 3- num=3, return 5*4*3*Factorize(2). 
// 4- num=2, return 5*4*3*2*Factorize(1). 
// 5- num=1, return 5*4*3*2*1*Factorize(0). 
// 6- num=0, Satisfies with the if(num == 0) condition, therefore returns 1 to the nested function. return 5*4*3*2*1*1 = 120.
// 7- Print the result on console.
