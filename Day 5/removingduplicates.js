/////defining a anonymous function
let isUnique = function getUnique(array){
    let uniArray = []; ///setting a new array
    for(let i of array){ ///looping through  the given set of array
        if(uniArray.indexOf(i) == -1) {
            uniArray.push(i);
        }
    }
    console.log(uniArray);
}

const array = ['Mike','Matt','Nancy','Adam','Mike','mike','Jenny','Nancy','Carl', 'Nancy',2,2,4,4,3,6,8];
isUnique(array); //calling the function.


//////declaring an IIFE function.
(function(unique){
    function getUnique(array){
        let uniArray = []; ///setting a new array
        for(let i of array){ ///looping through  the given set of array
            if(uniArray.indexOf(i) == -1) {
                uniArray.push(i);
            }
        }
        console.log(uniArray);
    }

    const array = ['Mike','Matt','Nancy','Adam','Mike','mike','Jenny','Nancy','Carl', 'Nancy',2,2,4,4,3,6,8];
    getUnique(array); //calling the function.
})();


/*expected output
[
  'Mike', 'Matt', 'Nancy',
  'Adam', 'mike', 'Jenny',
  'Carl', 2,      4,
  3,      6,      8
] */
