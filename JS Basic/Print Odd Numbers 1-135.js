//Print Odd Numbers 1 - 135

// pseudocode
//  1 - For loop for numbers from 1 to 135.
//  2 - USing if statement to check whether the number is odd.
//  3 - Displaying on the console.

//code
for(var i=1;i<136;i++){
    if(i%2!=0){
    console.log(i);
    }
}

//diagram
// 1 - i=1 , 1%2!=0, Result = 1
// 2 - i=2 , 2%2=0, i++
// i=135, 135%2!=0, Result=1,3,5...135
// i=136, 136 is not less than 136, Loop ends.
