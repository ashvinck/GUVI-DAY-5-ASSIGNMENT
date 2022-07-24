///QUESTION 1)a and 3)a


//Function to print odd numbers  in an array.

const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20] //an array consisting of numbers.
let oddNumbers = []; // declaring an empty array



// declaration of an anonymous function
let isOdd = function(nums){
    for (var i = 0; i < nums.length; i++){
        if ( (nums[i] % 2)!= 0){
            oddNumbers.push(nums[i]);

        }}
        console.log(oddNumbers);
    };
    isOdd(nums); // calling the function


//////declaration of an IIFE function
(function (name){
  function isOdd(nums){
    for (var i = 0; i < nums.length; i++){
        if ( (nums[i] % 2)!= 0){
            oddNumbers.push(nums[i]);
        }}
        console.log(oddNumbers);
    }
   isOdd(nums); ///calling an IIFE function
 })(oddNumbers);

///////declaration of arrow function.

    let isOdd = (nums) => {
        for (var i = 0; i < nums.length; i++) {
            if ((nums[i] % 2) != 0) {
                oddNumbers.push(nums[i]);

            }
        }
        console.log(oddNumbers);
    };
        isOdd(nums);
//// expected output  for each of the functions/////
/*
[
   1,  3,  5,  7,  9,
  11, 13, 15, 17, 19
]
*///////////////////////////
