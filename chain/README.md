# DahbChain Node (`chain/`)

This directory will contain the implementation of the DahbChain node
based on **Cosmos SDK + Ethermint (EVM module)**.

Planned components:

- `cmd/dahbd/` → main binary for running a node (validator / full / RPC)
- `app/` → DahbChain application wiring Cosmos SDK modules
- `x/` → custom modules (staking, gov, evm, tokenfactory, etc.)
- `config/` → configuration and genesis templates

> Note: At this stage, this is only a placeholder. The actual chain code,
> modules, and configuration will be added in later steps.
