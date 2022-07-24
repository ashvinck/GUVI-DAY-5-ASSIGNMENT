/////Question 1)d and Question 3)d
//// Program to find prime numbers in an array

const numArray = [...Array(100).keys()];
// Array(100).keys() generates numbers from 0 to 100.

function isPrime (num) { /// declaring an anonymous function.
    for ( let i = 2; i <= Math.sqrt(num); i++){
        if (num % i == 0){
            return false;
    }
}
return num > 1;
}
console.log(numArray.filter(isPrime)); ///calling the function


///2///////////////
(function (name) {  ///declarin an IIFE function.
    function isPrime (num) {
        for ( let i = 2; i <= Math.sqrt(num); i++){
            if (num % i == 0){
                return false;
        }
    }
    return num > 1;
    }
    console.log(numArray.filter(isPrime));
}) ();///calling the function

//////3/////////////
let isPrime = (num) => { /// declaring an anonymous function.
    for ( let i = 2; i <= Math.sqrt(num); i++){
        if (num % i == 0){
            return false;
    }
}
return num > 1;
}
console.log(numArray.filter(isPrime)); ///calling the function

/////////////Expected OUTPUT////
/*
[
    2,  3,  5,  7, 11, 13, 17, 19,
   23, 29, 31, 37, 41, 43, 47, 53,
   59, 61, 67, 71, 73, 79, 83, 89,
   97
 ]*/
