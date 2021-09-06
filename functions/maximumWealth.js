var maximumWealth = function (accounts) {
  const wealthPerCustomer = [];
  for (let i = 0; i < accounts.length; i++) {
    const customerAccounts = accounts[i];
    let customerWealth = 0;
    for (let j = 0; j < customerAccounts.length; j++) {
      customerWealth += customerAccounts[j];
    }
    wealthPerCustomer.push(customerWealth);
  }
  return Math.max(...wealthPerCustomer);
};
console.log(
  maximumWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ])
);
