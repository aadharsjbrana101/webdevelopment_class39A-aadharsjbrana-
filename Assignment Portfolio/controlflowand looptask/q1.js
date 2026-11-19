let purchaseAmount = 120;
let discount;
let finalPrice;

if (purchaseAmount >= 100) {
    discount = purchaseAmount * 0.20;
} else if (purchaseAmount >= 50) {
    discount = purchaseAmount * 0.10;
} else {
    discount = 0;
}

finalPrice = purchaseAmount - discount;

console.log("Purchase Amount: $", purchaseAmount);
console.log("Discount: $", discount);
console.log("Final Price: $", finalPrice);