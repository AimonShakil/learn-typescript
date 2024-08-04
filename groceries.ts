function buyGroceries(choice: string): number {
    let totalBill = 0;
  
    if (choice === 'fruits') {
        console.log('Available fruits: Apple, Banana, Orange');
        const fruitChoice = 'Apple'; // Assume the user chooses Apple
        const fruitPrice = 2.5;
        totalBill += fruitPrice;
        console.log(`Added ${fruitChoice} to your cart. Price: $${fruitPrice}`);
    } else if (choice === 'vegetables') {
        console.log('Available vegetables: Carrot, Broccoli, Spinach');
        const vegChoice = 'Carrot'; // Assume the user chooses Carrot
        const vegPrice = 1.5;
        totalBill += vegPrice;
        console.log(`Added ${vegChoice} to your cart. Price: $${vegPrice}`);
    } else {
        console.log('Invalid choice. Please choose fruits or vegetables.');
    }
  
    return totalBill;
  }
  
  // Scenario 2 - Checking Discounts
  function applyDiscount(totalBill: number): number {
    let discountedTotal = totalBill;
  
    if (totalBill > 10) {
        const discountPercentage = 0.1; // 10% discount for bills above $10
        discountedTotal = totalBill - totalBill * discountPercentage;
        console.log(`You get a 10% discount! New total: $${discountedTotal}`);
    }
  
    return discountedTotal;
  }
  
  // Scenario 3 - Checkout Process
  function checkoutProcess(paymentMethod: string): void {
    const paymentOptions = ['Credit Card', 'Debit Card', 'Cash'];
    let isValidPayment = false;
  
    for (let i = 0; i < paymentOptions.length; i++) {
        console.log(`[${i + 1}] ${paymentOptions[i]}`);
    }
  
    while (!isValidPayment) {
        const selectedOption = 2; // Assume the user chooses Debit Card
        if (selectedOption >= 1 && selectedOption <= paymentOptions.length) {
            console.log(`You have chosen ${paymentOptions[selectedOption - 1]} for payment. Thank you!`);
            isValidPayment = true;
        } else {
            console.log('Invalid option. Please choose a valid payment method.');
        }
    }
  }
  
  // Main shopping simulation
  const groceryChoice = 'fruits'; // Assume the user wants to buy fruits
  const totalBill = buyGroceries(groceryChoice);
  const discountedTotal = applyDiscount(totalBill);
  checkoutProcess('Debit Card'); // Assume the user chooses Debit Card for payment
 /*Explaination:
This code simulates the process of buying groceries, applying discounts, and checking out. Here's a breakdown of each step:

Scenario 1: Buying Groceries:

buyGroceries function: This function takes a string representing the user's choice ("fruits" or "vegetables") and returns the total bill amount.
Choice Validation:
If the choice is "fruits", the function displays available fruits and assumes the user chooses "Apple" with a price of $2.5.
If the choice is "vegetables", the function displays available vegetables and assumes the user chooses "Carrot" with a price of $1.5.
If the choice is invalid, the function prompts the user to choose again.
Bill Update:
The chosen item's price is added to the totalBill variable.
Confirmation Message:
A message confirms the chosen item and its price.
Scenario 2: Checking Discounts:

applyDiscount function: This function takes the totalBill and applies a discount if applicable.
Discount Calculation:
If the totalBill is greater than $10, a 10% discount is applied.
New Total Calculation:
The discounted total is calculated and stored in the discountedTotal variable.
Discount Announcement:
If a discount is applied, a message informs the user about the new discounted total.
Scenario 3: Checkout Process:

checkoutProcess function: This function takes the user's chosen payment method as a string.
Payment Options:
An array of available payment methods ("Credit Card", "Debit Card", "Cash") is defined.
Each option is displayed with a numbered index.
Validating Payment:
The function enters a loop that continues until a valid payment option is chosen.
User Choice:
The code assumes the user chooses "Debit Card" which has an index of 2 (selectedOption = 2).
Confirmation and Exit:
If the chosen option is within the valid range, the function confirms the selected payment method and ends the program.
If the chosen option is invalid, the function prompts the user to choose again.*/  



// readme

//PIAIC-Quarter-01-Task3

//Task 3: Scenario 1 - Modify Array with Methods: Initialize an array with some initial elements. Demonstrate the usage of the following array methods: push: Add new elements to the end of the array. pop: Remove the last element from the array. shift: Remove the first element from the array. unshift: Add new elements to the beginning of the array. Scenario 2 - Subarray Creation: Implement the use of splice and slice to create subarrays from the original array: splice: Create a subarray by removing elements from the original array. slice: Create a subarray without modifying the original array.