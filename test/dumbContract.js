const dumbContract = await DumbContract.createAndValidate(web3, contractAddress);

console.log(`Current counter value is: ${await dumbContract.counter}`);

console.log("Lets increase it by 2... This results in state change so we need to create tx.");
await dumbContract.countupTx(2).send({ from: accounts[0], gas: GAS_LIMIT_STANDARD });

console.log(`Current counter value is: ${await dumbContract.counter}`);

console.log("We can also get signed tx data: ");
console.log(await dumbContract.countupTx(2).getData());

console.log("When calling payable txs, TypeChain will make sure that you provide ether value:");
await dumbContract
  .countupForEtherTx()
  .send({ from: accounts[0], gas: GAS_LIMIT_STANDARD, value: 10 });
console.log(`Current counter value is: ${await dumbContract.counter}`);

