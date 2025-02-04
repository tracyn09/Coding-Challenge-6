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

//Task 5
const convertCurrency = function(amount, exchangeRate) {
    return amount * exchangeRate
}
let conversion= convertCurrency(250, 0.85)
console.log(`Converted Amount: $${conversion}`);

//Task 6 
let orders = [200,600,1200,450,800]
const applyBulkDiscount= (orders,discountFunction) => {
    return orders.map(discountFunction)
}
orders= applyBulkDiscount(orders, amount => amount > 500 ? amount * 0.9 : amount)
console.log(orders);

//Task 7
const createExpenseTracker = function() {
    let total= 0 //start count from 0
    return function(expenses) {
        total += expenses
        return `Total Expenses: $${total}` // creating consistent log entity
    }
}
let expenseTracker = createExpenseTracker()
console.log(expenseTracker(200))
console.log(expenseTracker(150));

//Task 8
const calculateYearsToPromotion = function(employeeLevel) {
    if (employeeLevel < 10) {
        return (10 - employeeLevel) * 2
    } else if (employeeLevel === 10) {
        return 0;}
}
console.log(`Years to Level 10: ${calculateYearsToPromotion(7)}`);