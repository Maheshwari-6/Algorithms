// //For a fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000.

// A Fibonacci sequence is an infinite series of numbers that is created by adding the last two numbers in the series. A series would start with the numbers 0 and 1 in place, followed by 1 (0+1), 2 (1+1), 3 (1+2), 5 (3+2), etc.

// 0 1 1 2 3 5 8 13 21...

//pseudocode
// 1- Function to carry out the repetative task.
// 2- Defining two variables for first two values and displaying them on console.
// 3- for loop to move towards next number till 10.
// 4- inside for loop, adding values of last two indexes and displaying on console. Reassigning the values of variables to add the last two numbers from the sequence.

//code

function printFibonacci(n) {
    let a = 0, b = 1, c;
    console.log(a);
    console.log(b);
    for (let i = 2; i < n; i++) {
      c = a + b;
      console.log(c);
      a = b;
      b = c;
    }
  }
  
  printFibonacci(10);

  //diagram
//   1- a=0, b=1, Result = 0,1.
//   2- i=2, c=0+1=1, a=1, b=1, Result = 0,1,1.
//   3- i=3, c=1+1=2, a=1, b=2, Result = 0,1,1,2.
//   i=10, c=13+21=34, a=21, b=34, Result=0,1,1,2...13,21,34.
//   i=11, 11!<10, loop exit.