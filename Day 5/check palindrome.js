///////Defined an array which contains several palindromes and other words.
array = ["racecar","car","truth","nick","sick","gigg","malayalam","anna","radar","kayak","click","civic","madam","rotator","sagas","solo","solos","mom","dad","tenet","wow"]
newArray =[];

//declaration of an anonymous function

let isPalindrome = function(array){
for (let i = 0; i < array.length ; i++) {
    let word = array[i];
    let fir = word.split('').reverse().join('');
     if ( word == fir){
        newArray.push(fir) ///pushing palindromes to a new element
     }
    } console.log(newArray);
};
isPalindrome(array);  ///calling the function

///////////declaration of an IIFE function

(function (words){
    function isPalindrome(array){
        for (let i = 0; i < array.length ; i++) {
            let word = array[i];
            let fir = word.split('').reverse().join('');
             if ( word == fir){
                newArray.push(fir) ///pushing palindromes to a new element
             }
            } console.log(newArray);
        }
        isPalindrome(array);
})(words);     //calling the function

////////////declaration of an arrow function.

let isPalindrome = (array) => {
    for (let i = 0; i < array.length; i++) {
        let word = array[i];
        let fir = word.split('').reverse().join('');
        if (word == fir) {
            newArray.push(fir); ///pushing palindromes to a new element
        }
    } console.log(newArray);
};
    isPalindrome(array);  ///calling the function

   /* ////////expected output//////
    ['racecar', 'malayalam', 'anna', 'radar', 'kayak', 'civic', 'madam', 'rotator', 'sagas', 'solos', 'mom', 'dad', 'tenet', 'wow']
    */
