////question 1) b and 3) b

//declaring  an array of weeks
const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
const newArray =[];

//1//
/////// declaring an anonymous function
let titleCase= function(day){
    for (const day of days){
        var upperDay = day.charAt(0).toUpperCase()+day.slice(1);
        newArray.push(upperDay)}
        console.log(newArray);
    }
    titleCase(); //calling the function



//2//
/////////declaring an IIFE functions
(function(week){
  function display(titleCase){
  for (const day of days){
      var upperDay = day.charAt(0).toUpperCase()+day.slice(1);
      newArray.push(upperDay)}
        console.log(newArray);
}}
   display(titleCase);
})(days); //calling the function


////3///
/////declaring an arrow function
    let titleCase= (day) => {
        for (const day of days) {
            var upperDay = day.charAt(0).toUpperCase() + day.slice(1);
            newArray.push(upperDay)}
         console.log(newArray);
        }
    titleCase(); //calling the function

/////// expected output for all functions
/*
[
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]
*/
