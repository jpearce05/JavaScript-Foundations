// this works for basic 1073 value in console.log


let name = "Oscar";
let principal = 200000;
let rate = 0.05;
let years = 30;
let monthlyInterestRate = rate / 12;
let periods = years * 12;

let numerator = monthlyInterestRate * Math.pow((1 + monthlyInterestRate), periods)
let denominator = Math.pow((1 + monthlyInterestRate), periods) - 1
let monthlyRate = principal * (numerator / denominator);


function mortgageCalculator(principal, rate, periods) {
  return Math.round((monthlyRate));

}

console.log(mortgageCalculator());