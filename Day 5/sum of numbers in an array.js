




////question 1)c and 3)c


///Program to print the sum of the numbers in an array.


const numArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let sum = 0;

let addition = function(numArray){ ////using an anonymous function.///
    for (let i = 0; i < numArray.length; i++){
        sum += numArray[i];
     }
     console.log(sum);
   };
addition(numArray); ///////expected output "210".


(function(nums){   ////using an IIFE expression///
    function addition(numArray){
        for (let i = 0; i < numArray.length; i++){
            sum += numArray[i];
         }
         console.log(sum);
       }
       addition(numArray);
})(); //////expected output "210".



let addition = (numArray) => {    //// //using an arrow function/
    for (let i = 0; i < numArray.length; i++){
        sum += numArray[i];
     }
     console.log(sum);
   }
addition(numArray); ///expected output "210".
