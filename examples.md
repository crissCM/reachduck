# Examples

Some example code for how to use `reachduck`.\
[Return home](/index.md).

## Table of Contents

- [Initialize Reach stdlib](#stdlib-instantiating-stdlib)
- [Using Reach instance](#stdlib-using-configured-instance)
- [Connect/Disconnect user wallet](#session-management-connecting-a-user-requires-stdlib)
- [Check for wallet connect and/or user session](#session-management-check-if-session-active-or-selected-wallet-provider)
- [Fetch assets (Algorand only)](#user-management-fetch-assets)

---

## **Reach Standard Library:** Creating an **stdlib** instance
Use `loadReach` where you would use `loadStdlib( ... )`. You'll only want to call this function once! 
```typescript
import { loadStdlib } from "@reach-sh/stdlib"

const stdlib = loadReach(loadStdlib/* , "ETH" | "ALGO" */);

// Now you can use it as you normally would
const account = await stdlib.createAccount()
```

---

## **Reach Standard Library:** Using configured instance 

If you want to access the reach `stdlib` after initializing it, use `createReachAPI`:
```typescript
import { createReachAPI } from "@jackcom/reachduck"
const stdlib = createReachAPI()

// You can create an account using `stdlib`
const acc = await stdlib.createAccount()
```

---

## **Session Management:** Connecting a user (requires `stdlib`)

This is tailored for DApps that need to connect a user's wallet. On Algorand, you will need to call one of two functions before you can connect, so the library knows what Wallet Provider to call on. 
```typescript
import { 
    connectUser,
    disconnectUser,
    useWebWallet // or "useWalletConnect",
} from "@jackcom/reachduck"

// Algorand: trigger MyAlgoWallet. You can have a button trigger it as long as
// this (or "useWalletConnect") is called once before `connectUser`.
// Ethereum will trigger the default provider (usually MetaMask)

useWebWallet(); // or useWalletConnect() to trigger modal

const { account, address, balance } = await connectUser();

// When you're done: call this to clear localStorage (and/or end your 
// wallet-connect session)
disconnectUser(); 
```
---

## **Session Management:** Check if session active, or selected wallet provider
There is a quick-and-dirty way to see if a user is connected when your application loads. Although this does not require it, you cannot create a user session without `stdlib`.
```typescript
import { checkSessionExists } from "@jackcom/reachduck"

const { exists, isWCSession, addr } = checkSessionExists();

console.log(exists); // true | false
console.log(addr); // "XXXX ..."
console.log(isWCSession); // if "true", user connected with WalletConnect
```
---

## **User Management:** Fetch assets
This only works on Algorand, since "assets" in Ethereum are usually smart contracts.
```typescript
import { createConnectorAPI } from "@jackcom/reachduck"

// const algo = createConnectorAPI(); This is the default
// But for a little more control you can try:
const algoTestnet = createConnectorAPI("ALGO", "TestNet");
const assets = await algoTestnet.loadAssets();
```

---

### Site Menu
* [Home](/index.md)
* [Methods](/methods.md)
* [Types](/types.md)
* [Examples](/examples.md)

---

[Return home](/index.md)