/////Program to Rotate an array by k times.
//////////////////////////////////////////////////////////////////////////
let toRotate = function Rotate(a, n, k){ //defining an anonymous function.
    k  = k % n;


    for (let i = 0; i < n; i++) {  ///iterating through the array.


        if ( i < k ) {
            ///pushing the rightmost kth elements to the newArray.

          newArray.push(a[n + i -k])

        }
        else {
            /////pushing the elements from beginning after the kth elements to the newArray
           newArray.push(a[i - k])

        }

    }  console.log(newArray);
 };

 let Array = [1,2,3,4,5,6,7,8,9,10];
let K = 3;
let N = Array.length;
let newArray = [];
 toRotate(Array, N, K);  ////calling the function

 /////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
(function (toRotate){  //defining an IIFE function.
    function Rotate(a, n, k){
        k  = k % n;


        for (let i = 0; i < n; i++) {  ///iterating through the array.

            if ( i < k ) {
                ///pushing the rightmost kth elements to the newArray.

              newArray.push(a[n + i -k])

            }
            else {
                //////pushing the elements from beginning after the kth elements to the newArray
               newArray.push(a[i - k])

            }

        }  console.log(newArray); ////outputting the newArray.
     }


     let Array = [1,2,3,4,5,6,7,8,9,10];
    let K = 3;
    let N = Array.length;
    let newArray = [];

    Rotate(Array, N, K);
})(); ///calling the function.

/* expectated Output
[8, 9, 10, 1, 2, 3, 4, 5, 6, 7]
*/
