let accounts = [
    { accountNumber: 1, name: "Stanzin", balance: 10000 },
    { accountNumber: 2, name: "Namgail", balance: 5000 },
  ];
  
  // Deposit function using promises
  function deposit(accountNumber, amount) {
    return new Promise((resolve, reject) => {
      const account = accounts.find(acc => acc.accountNumber === accountNumber);
      if (account) {
        account.balance += amount;
        resolve(`Deposit successful! New balance: $${account.balance}`);
      } else {
        reject("Account not found.");
      }
    });
  }
  
  // Withdrawal function using promises
  function withdraw(accountNumber, amount) {
    return new Promise((resolve, reject) => {
      const account = accounts.find(acc => acc.accountNumber === accountNumber);
      if (account) {
        if (account.balance >= amount) {
          account.balance -= amount;
          resolve(`Withdrawal successful! New balance: $${account.balance}`);
        } else {
          reject("Insufficient funds.");
        }
      } else {
        reject("Account not found.");
      }
    });
  }
  
  // Balance check function
  function checkBalance(accountNumber) {
    return new Promise((resolve, reject) => {
      const account = accounts.find(acc => acc.accountNumber === accountNumber);
      if (account) {
        resolve(`Current balance: $${account.balance}`);
      } else {
        reject("Account not found.");
      }
    });
  }
  
  // Example usage
  deposit(1, 2000)
    .then(res => console.log(res))
    .catch(err => console.error(err));
  
  withdraw(1, 1000)
    .then(res => console.log(res))
    .catch(err => console.error(err));
  
  checkBalance(1)
    .then(res => console.log(res))
    .catch(err => console.error(err));
  