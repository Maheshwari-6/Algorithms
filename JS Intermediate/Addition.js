//Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5, but not both 3 and 5. To solve this task you might want to use the modulus operator.

//pseudocode
// 1- Function to carry out the repetative task.
// 2- For loop to iterate the numbers from 200 to 2700.
// 3- if statement to check if number is divisible by 3 or 5, but not both 3 and 5.
// 4- Using console to display the result.

//code

let n;
function fun(n){
    for(i=200; i<=n; i++){
        if((i%3 === 0 || i%5 === 0) && !(i%3 ===0 && i%5 === 0)){
            console.log(i);
        }
    }
}

fun(2700);

//diagram
// 1- i=200, (i%3 === 0 || i%5 === 0) && !(i%3 ===0 && i%5 === 0) = true, Result=200.
// 2- i=201, (i%3 === 0 || i%5 === 0) && !(i%3 ===0 && i%5 === 0) = true, Result=200,201.
// 3- i=2700, (i%3 === 0 || i%5 === 0) && !(i%3 ===0 && i%5 === 0) = false, Result=200,201...2695,2697.