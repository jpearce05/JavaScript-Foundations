// 🌟🌟🌟 M V P 🌟🌟🌟//

// 🏡 Task 1: Variables
/* Create variables for principal, interest rate, and years. Assign them the values 200000, 0.05, and 30 respectively. Create another value called name and give it the value of your own name.
*/




// 🏡 Task 1.5: Simple Math
/* To create a monthly mortgage rate calculator, we need to know the number of years in months and the monthly interest rate. 

Create a variable called `monthlyInterestRate` and give it the value of interest rate divided by 12. 

Create another variable called `periods` and give it the value of years*12.
*/




// 🏡 Task 2: Harder Math
/* Create your calculator! Use the formula in the ReadMe to run calculations on your numbers. Save the final value into a variable called monthlyRate.

Hint: while these calculations can be done in one line, it might be helpful to create a variable called "numerator" to calculate the numerator, and another called "denominator" to calculate the denominator 

Hint #2: you'll need to use the `math` object for parts of this calculation!

When your math is correct, monthlyRate will equal 1073.64
*/




// 🏡 Task 3: Function
/* Create a function called `mortgageCalculator` that combines all of the steps from task 1 and 2 and returns a sentence "{Name}, your monthly rate is ${monthlyRate}"

If your name is `Oscar` mortgageCalculator() should return "Oscar, your monthly rate is 1073.64"
*/

// let name = "Oscar";
// let principal = 200000;
// let rate = 0.05;
// let years = 30;
// let monthlyInterestRate = rate / 12;
// let periods = years * 12;

// let numerator = monthlyInterestRate * Math.pow((1 + monthlyInterestRate), periods)
// let denominator = Math.pow((1 + monthlyInterestRate), periods) - 1
// let monthlyRate = principal * (numerator / denominator);


// function mortgageCalculator(principal, rate, periods) {
//   return Math.round((monthlyRate));

// }

// console.log(mortgageCalculator());
// console.log(`${name}, your monthly rate is $` ${ monthlyRate });


// console.log({ mortgageCalculator });


// 🏡 Task 4: Arguments and Parameters
/* Substitute the variables in your functions for parameters such that you can substitute `P`, `I`, and `N` when you call the function.

For example,
mortgageCalculator(200000, 0.05, 30); <-- should return 1,073.64
*/


// function mortgageCalculator(p, r, y) {
//     // let name = n;
//     let principal = p;
//     let rate = r;
//     let years = y;
//     let monthlyInterestRate = r / 12;
//     let periods = y * 12;

//     let numerator = monthlyInterestRate * Math.pow((1 + monthlyInterestRate), periods)
//     let denominator = Math.pow((1 + monthlyInterestRate), periods) - 1

//     let monthlyRate = principal * (numerator / denominator);

//       return Math.round((monthlyRate));

//     }

// console.log(mortgageCalculator(200000, 0.05, 30));
// console.log(`${name}, your monthly rate is $` ${ monthlyRate });


// function mortgageCalculator(name, principal, rate, year, creditScore) {

//   monthlyInterestRate = rate / 12;
//   periods = year * 12;

//   let numerator = monthlyInterestRate * Math.pow((1 + monthlyInterestRate), periods)
//   let denominator = Math.pow((1 + monthlyInterestRate), periods) - 1

//   let numeratorLower = (monthlyInterestRate - .005) * Math.pow((1 + monthlyInterestRate - .005), periods)
//   let denominatorLower = Math.pow((1 + monthlyInterestRate - .005), periods) - 1

//   let numeratorHigher = (monthlyInterestRate + .005) * Math.pow((1 + monthlyInterestRate + .005), periods)
//   let denominatorHigher = Math.pow((1 + monthlyInterestRate + .005), periods) - 1

//   let monthlyRate = principal * (numerator / denominator);
//   let monthlyLower = principal * (numeratorLower / denominatorLower);
//   let monthlyHigher = principal * (numeratorHigher / denominatorHigher);
  

//   if (creditScore > 740) {
//     return (`${name}, your monthly rate is $ ${ Math.round(monthlyLower) }`);
//   } else if (creditScore < 660) {
//     return (`${name}, your monthly rate is $ ${ Math.round(monthlyHigher) }`);
//   } else 

//   return (`${name}, your monthly rate is $ ${ Math.round(monthlyRate) }`);
    
//   }


// // let monthlyPayment = mortgageCalculator(200000, 0.05, 30);
// console.log(mortgageCalculator("oscar", 200000, 0.05, 30, 600));



// 🏡 Task 5: Conditionals
/* Add another paramter to your function called credit score. This parameter will be a number between 0 and 800 (a credit score).

Then, add control flow within your function such that IF creditScore is above 740, interest rate drops by 0.5%, if credit score is below 660, interest rate increases by 0.5% and if credit score is anywhere between 660 and 740 interest rate doesn't change.
*/

// function mortgageCalculator(name, principal, rate, year, creditScore) {
//   let newRate = rate;

//   if (creditScore > 740) {
//     newRate -= .005;
//   } else if (creditScore < 660) {
//     newRate += .005;
//   } else {
//     newRate;
//   }


//   monthlyInterestRate = newRate / 12;
//   periods = year * 12;

//   let numerator = monthlyInterestRate * Math.pow((1 + monthlyInterestRate), periods)
//   let denominator = Math.pow((1 + monthlyInterestRate), periods) - 1


//   let monthlyRate = principal * (numerator / denominator);

//   return (`${name}, your monthly rate is $ ${ Math.round(monthlyRate) }`);


// }

// console.log(mortgageCalculator("oscar", 200000, 0.05, 30, 800));


// function mortgageCalculator(name, principal, rate, year, creditScore) {

//   monthlyInterestRate = rate / 12;
//   periods = year * 12;

//   let numerator = monthlyInterestRate * Math.pow((1 + monthlyInterestRate), periods)
//   let denominator = Math.pow((1 + monthlyInterestRate), periods) - 1

//   let numeratorLower = (monthlyInterestRate - .005) * Math.pow((1 + monthlyInterestRate - .005), periods)
//   let denominatorLower = Math.pow((1 + monthlyInterestRate - .005), periods) - 1

//   let numeratorHigher = (monthlyInterestRate + .005) * Math.pow((1 + monthlyInterestRate + .005), periods)
//   let denominatorHigher = Math.pow((1 + monthlyInterestRate + .005), periods) - 1

//   let monthlyRate = principal * (numerator / denominator);
//   let monthlyLower = principal * (numeratorLower / denominatorLower);
//   let monthlyHigher = principal * (numeratorHigher / denominatorHigher);
  

//   if (creditScore > 740) {
//     return (`${name}, your monthly rate is $ ${ Math.round(monthlyLower) }`);
//   } else if (creditScore < 660) {
//     return (`${name}, your monthly rate is $ ${ Math.round(monthlyHigher) }`);
//   } else 

//   return (`${name}, your monthly rate is $ ${ Math.round(monthlyRate) }`);
    
//   }


// let monthlyPayment = mortgageCalculator(200000, 0.05, 30);
// console.log(mortgageCalculator("oscar", 200000, 0.05, 30, 600));



// 🏡 Task 6: Loops
/* Write a new function called variableInterestRate. This function should be the same as mortgageCalculator, except it should console.log the monthly payment for 10 different interest rates at 0.5% increments plus or minus 2% from the inputted interest rate. Complete these calculations using a for loop.

For example, variableInterestRate(200000, 0.04, 30) should console.log:

"{Name}, with an interest rate of 0.02, your monthly rate is $739"
"{Name}, with an interest rate of 0.025, your monthly rate is $790"
"{Name}, with an interest rate of 0.03, your monthly rate is $843"
"{Name}, with an interest rate of 0.035, your monthly rate is $898"
"{Name}, with an interest rate of 0.04, your monthly rate is $955"
"{Name}, with an interest rate of 0.045, your monthly rate is $1013"
"{Name}, with an interest rate of 0.05, your monthly rate is $1074"
"{Name}, with an interest rate of 0.055, your monthly rate is $1136"
"{Name}, with an interest rate of 0.06, your monthly rate is $1199"
*/

function mortgageCalculator(name, principal, rate, year) {

  adjustedRate = rate - .02;
  // monthlyInterestRate = rate / 12;
  periods = year * 12;

  for (i = 0; i < 9; i++) {
    let adjustedMonthlyRate = adjustedRate / 12;
    let numerator = adjustedMonthlyRate * Math.pow((1 + adjustedMonthlyRate), periods)
    let denominator = Math.pow((1 + adjustedMonthlyRate), periods) - 1
    let monthlyRate = principal * (numerator / denominator);
    adjustedRate = adjustedRate +.005;
    // console.log(mortgageCalculator("oscar", 200000, 0.04, 30));
    // return (`${name}, your monthly rate is $ ${ Math.round(monthlyRate) }`);
    console.log(`${name}, with an interest rate of ${Math.round(adjustedRate * 1000) / 1000}, your monthly rate is \$${monthlyRate}`);
   
  };
   

    
  }


  mortgageCalculator("oscar", 200000, 0.04, 30);

// console.log(mortgageCalculator("oscar", 200000, 0.04, 30));





// 🌟🌟🌟 STRETCH 🌟🌟🌟//

/* Attempt any of the stretch goals below once you have finished the work above. Remember as always, these may require additional research beyond what you learned today */

/*  🏡 Add  `Property Tax`, `Homeowner's insurance` and `HOA fees` as parameters in your function to calculate total monthly spending on housing */


/* 🏡 Build a calculator function that accepts `monthly payment` and `interest rate` and returns the maximum loan that a person could afford */


/* 🏡 Explore using `window.prompt()` to allow a user to input parameters in the browser */


/* 🏡  Refactor your `variableInterestRate()` function to accept an array of interest rates (make sure to copy and paste as to not lose your work!) */
