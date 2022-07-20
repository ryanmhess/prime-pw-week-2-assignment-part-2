// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We create a variable called name and set is to Dane as a string variable.
// Next we have conditional statement, if the variable name is exactly equivalent to the string Mary,
// we console.log 'Hi, Mary!' and if name is not exactly equivalent to the string Mary, 
// we console.log 'How do you do?'  In this example we would console.log 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// In this example, we create a variable called secret with no assignment. Next, we create a number variable called code and set to 123.
// Next we have a conditional that checks if code is equal to 123.  If code is equal to 123, the variable secret is set to the string 'super'
// and then the variable code is changed to the resultant of the initial value of 123 multiplied by 2. A second conditional is performed to
// check if the new value of code is greater than 250.  If the new value of variable code is greater than 250, the variable secret is changed
// to the string 'duper'. Finally, the console.log for the variable is produced.  In this case, the console.log is 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We create a boolean variable isStudent set to true, a numerical variable age set to 34, and a numerical variable zip set to 55407.
// A conditional is run.  If isStudent is equal to true and the zip is greater than 80000, console.log 'You're a student on the West Coast!'
// if either of those conditions are not correct, the conditional progresses.  Next, if isStudent is equal to false or the age is less than 
// 30, console.log 'What are your hobbies?'.  If both of these conditions are incorrect, the conditional progresses again.  If isStudent is 
// equal to true, console.log 'Welcome to Prime!'  The conditional ends there because the boolean variable can only be true or false and those
// parameters would have been met by the third conditional, so the final console.log 'How about the weather?' would never be produced.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// Wrong color set.  should be: let colorOne = 'blue';
let colorOne = 'red';
// Wrong color set.  should be: let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
  // forgot to set colorTwo to purple as well. should add here: colorTwo = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
// If time is set as a constant variable, then it will never change and we will always be throwing the food away.
// if we use a numerical variable, the time can change so there could be instances where the conditional of time >= 4 could be 
// correct or incorrect.  Use: let time = 4;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// If minAge is assumed to be the minimum age something can be, then it doesn't make sense to have a conditional of minAge being <=
// I would change it to: (minAge < age)
// With that change, the variable age with value 21 would produce:  console.log 'enter'
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

