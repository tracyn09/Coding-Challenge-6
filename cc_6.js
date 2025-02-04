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