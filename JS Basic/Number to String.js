// Write a program that takes an array of numbers and turns the negative values to strings. For example, for array X = [1,-4,0,-1] the output should be [1,'Turing,0,'Turing'].
//pseudocode
//code

let X = [1,-4,0,-1];
function numToStr() {
    var str = 'Turing';
    let newX=X[i];
    for(var i=0;i<X.length;i++){
        if(X[i]<0){
            X[i]=str;
        }
        else{
            newX=X[i];
        }
    }
    return(newX);
}
numToStr(X);
console.log(newX);