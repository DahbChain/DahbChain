# DahbChain - Architecture Overview

## 1. Base Stack

- **Framework**: Cosmos SDK
- **EVM Compatibility**: Ethermint (EVM module)
- **Consensus**: Proof of Stake using CometBFT/Tendermint
- **Execution**: EVM (Solidity smart contracts)

## 2. Node Types

- **Validator node**
- **Full node**
- **RPC node**

All of them run the same `dahbd` binary with different configurations.

## 3. Modules (high-level)

- `x/auth` - accounts and signatures
- `x/bank` - native token (DAHB) transfers
- `x/staking` - PoS staking and validators
- `x/gov` - on-chain governance
- `x/evm` - EVM execution (Ethermint)
- `x/tokenfactory` (planned) - native token creation module (optional)

## 4. External Components

- **RPC endpoints**
  - HTTP + WebSocket (JSON-RPC)
- **Block explorer**
  - Reads chain data via RPC or indexer
- **SDKs**
  - `sdk-js/` JavaScript/TypeScript SDK
- **DApps**
  - `dapp-token-launcher/` token creation dApp
