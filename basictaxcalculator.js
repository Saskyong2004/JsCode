const taxRates = {
    1: 0.10, // 10% tax for item type 1
    2: 0.15, // 15% tax for item type 2
    3: 0.18, // 18% tax for item type 3
    4: 0.05  // 5% tax for item type 4
  };
  
  function calculateTax(itemType, amount) {
    const taxRate = taxRates[itemType];
    
    if (taxRate === undefined) {
      return "Invalid item type!";
    }
  
    const taxAmount = amount * taxRate;
    const finalAmount = amount + taxAmount;
  
    return `Item Type: ${itemType}, Original Amount: ₹${amount}, Tax: ₹${taxAmount.toFixed(2)}, Final Amount: ₹${finalAmount.toFixed(2)}`;
  }
  
  console.log(calculateTax(1, 100));  // Output for item type 1
  console.log(calculateTax(2, 200));  // Output for item type 2
  console.log(calculateTax(3, 150));  // Output for item type 3
  console.log(calculateTax(4, 50));   // Output for item type 4
  console.log(calculateTax(5, 500));  // Output for item type 5
  