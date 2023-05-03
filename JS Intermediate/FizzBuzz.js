//Create an algorithm that inserts the numbers from 1 to 135 into an array, while replacing the values that are divisible by 3 with the word "Fizz", the numbers that are divisible by 5 with the word "Buzz", and the numbers that are divisible with 3 and 5 with the word "FizzBuzz". Your output should look like [1,2,'Fizz',4,'Buzz',5,'Fizz',7,8,...]

//psedocode
// 1- Function to carry out the repetative task.
// 2- Define empty Array.
// 3- For loop to iterate the numbers from 1 to 135.
// 4- If statements to check the condition and depending on the condition, push number or specific string to an empty array.
// 5- Using console to display the result.

//code
function fizzBuzz (n) {
    const answer = []
    
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0)
            answer.push("FizzBuzz")
        else if (i % 3 == 0)
            answer.push("Fizz")
        else if (i % 5 == 0)
            answer.push("Buzz")
        else
            answer.push(i.toString())
    }
    
    return answer
};

console.log(fizzBuzz(135))

//diagram
// 1- i=1, None of the condition matches, Result = 1.
// 2- i=2, None of the condition matches, Result = 1,2.
// 3- i=3, (i % 3 == 0) = true, Result = 1,2,"Fizz".
// 4- i=135, (i % 3 == 0 && i % 5 == 0) = true, Result = 1,2,"Fizz"...134,"FizzBuzz".