const {Blockchain, Transaction} = require('./blockchain');

const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate("PRIVATE_KEY_HERE");
const myWalletAddress = myKey.getPublic("hex");

const friend = "PUBLIC_KEY_HERE";

let kcoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, friend, 100);

tx1.signTransaction(myKey);

kcoin.addTransaction(tx1);

kcoin.minePendingTransactions(myWalletAddress);

console.log("Your Wallet Balance: " + kcoin.getBalanceOfAddress(myWalletAddress));
console.log("Friend's Balance: " + kcoin.getBalanceOfAddress(friend));
