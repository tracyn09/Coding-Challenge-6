//Task 1
const  calculateProfit= function(costPrice, sellingPrice, unitsSold) { 
    return (sellingPrice - costPrice)* unitsSold
}
let totalProfit= calculateProfit(50,70,200)
console.log(`Total Profit: $${totalProfit}`);