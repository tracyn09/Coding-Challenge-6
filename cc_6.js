//Task 1
const  calculateProfit= function(costPrice, sellingPrice, unitsSold) { 
    return (sellingPrice - costPrice)* unitsSold
}
let totalProfit= calculateProfit(50,70,200)
console.log(`Total Profit: $${totalProfit}`);

//Task 2
const calculateSalesTax= function (amount,taxRate) {
    return amount * taxRate
}
let salesTax= calculateSalesTax(500, 0.1)
console.log(`Sales Tax: $${salesTax}`);

//Task 3
const calculateBonus = function(salary, performanceRating) { 
    return performanceRating === "Excellent" ? salary * 0.2:
    performanceRating === "Good" ? salary * 0.1:
    performanceRating === "Average" ? salary * 0.05: 0;
         
}

let bonus = calculateBonus(7000, "Good")
console.log(`Bonus: $${bonus}`);

//Task 4
const calculateSubscriptionCost= function(plan, months, discount = 0) {
    return plan === "Basic" ? 10 * months:
    plan === "Premium" ? 20 * months:
    plan === "Enterprise" ? 50 * months: 0;
}
let subscriptionCost = calculateSubscriptionCost("Premium", 12, 0)
console.log(`Total Cost: $${subscriptionCost}`);