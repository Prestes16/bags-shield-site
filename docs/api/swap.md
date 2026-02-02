# Swap API

Build secure token swaps powered by Jupiter.

## POST /api/v0/swap/quote

Get a quote for a token swap.

### Request

```json
{
  "inputMint": "So11111111111111111111111111111111111111112",
  "outputMint": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
  "amount": "1000000",
  "slippageBps": 50,
  "swapMode": "ExactIn"
}
```

### Response

```json
{
  "success": true,
  "response": {
    "provider": "jupiter",
    "quote": { ... },
    "fee": {
      "feeBps": 10,
      "feeAccount": "...",
      "trackingAccount": "..."
    }
  },
  "meta": {
    "requestId": "...",
    "provider": "jupiter",
    "latency": 123
  }
}
```

## POST /api/v0/swap/build

Build a swap transaction.

### Request

```json
{
  "quoteResponse": { ... },
  "userPublicKey": "...",
  "feeAccount": "...",
  "trackingAccount": "..."
}
```

### Response

```json
{
  "success": true,
  "response": {
    "provider": "jupiter",
    "swapTransaction": "base64...",
    "lastValidBlockHeight": 12345
  },
  "meta": {
    "requestId": "...",
    "provider": "jupiter",
    "latency": 456
  }
}
```
