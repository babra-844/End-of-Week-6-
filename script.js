
// 1. Collect user input
let totalBudget = Number(prompt("Enter your total budget (KES):"));

let totalExpenses = Number(prompt("Enter your total expenses (KES):"));

// 2. Create a reusable function
function calculateBalance(budget, expenses) {
    return budget - expenses;
}

// 3. Perform budget calculations
let remainingBalance = calculateBalance(totalBudget, totalExpenses);

// 4. Display results in the console
console.log("===== SpendWise Budget Summary =====");
console.log("Total Budget: KES " + totalBudget);
console.log("Total Expenses: KES " + totalExpenses);
console.log("Remaining Balance: KES " + remainingBalance);
console.log("====================================");
