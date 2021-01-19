const {Blockchain, Transaction} = require('./blockchain');

const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate("b3d187d5e7ffca95f986218f4340f20f30fd09101eab2052f93a6233e47d4cb1");
const myWalletAddress = myKey.getPublic("hex");

const friend = "04d1730f704e6ed77bfd65ea83732c8c7492e22a2482350809b05cff1a22d50dea7c2ecc970c95b6024e0c61510aec9ae95d5741e7cd3764020599a0ec1a834b48";

let kcoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, friend, 100);

tx1.signTransaction(myKey);

kcoin.addTransaction(tx1);

kcoin.minePendingTransactions(myWalletAddress);

console.log("Your Wallet Balance: " + kcoin.getBalanceOfAddress(myWalletAddress));
console.log("Friend's Balance: " + kcoin.getBalanceOfAddress(friend));