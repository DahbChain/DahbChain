# @dahbchain/sdk-js

Simple JavaScript SDK skeleton for DahbChain.

This is an early, experimental SDK. It does **not** talk to a real DahbChain node yet.
It only provides a basic `DahbChain` class and a mock `tokens.createErc20()` method.

## Usage (local test)

```js
const { DahbChain } = require("./index.js");

async function main() {
  const dahb = new DahbChain({
    rpcUrl: "https://rpc.dahbchain.local", // placeholder
    chainId: 0xDAHB
  });

  const pingResult = await dahb.ping();
  console.log("Ping:", pingResult);

  const tokenResult = await dahb.tokens.createErc20({
    name: "TestToken",
    symbol: "TST",
    decimals: 9,
    totalSupply: "1000000000"
  });

  console.log("Token create (mock):", tokenResult);
}

main().catch(console.error);

