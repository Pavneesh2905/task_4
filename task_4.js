// Function to calculate monthly mortgage payment
function calculateMortgage(principal, annualInterestRate, years) {
    // Convert annual interest rate to monthly interest rate (in decimal form)
    let monthlyInterestRate = annualInterestRate / 100 / 12;
    
    // Calculate the number of monthly payments
    let numberOfPayments = years * 12;
    
    // Use the mortgage formula to calculate the monthly payment
    let monthlyPayment = principal * 
                         (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / 
                         (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    
    return monthlyPayment;
}

// Example usage of the calculateMortgage function
let principal = 200000; // Loan amount in dollars
let annualInterestRate = 5; // Annual interest rate in percent
let years = 30; // Loan term in years

// Calculate the monthly mortgage payment
let monthlyPayment = calculateMortgage(principal, annualInterestRate, years);

// Output the result to the console
console.log(`The monthly payment for a $${principal} loan at an annual interest rate of ${annualInterestRate}% for ${years} years is $${monthlyPayment.toFixed(2)}.`);
