# API Overview

Bags Shield provides a RESTful API for token security analysis, swap operations, and analytics.

## Base URL

```
https://app.bags-shield.com/api/v0
```

## Authentication

Most endpoints require an API key. Include it in the `x-api-key` header:

```bash
curl -H "x-api-key: YOUR_API_KEY" \
  https://app.bags-shield.com/api/v0/swap/quote
```

## Rate Limits

- **Free tier**: 100 requests/minute
- **Pro tier**: 1000 requests/minute

## Response Format

All endpoints return JSON with a consistent structure:

```json
{
  "success": true,
  "response": { ... },
  "meta": {
    "requestId": "req_1234567890_abc123",
    "provider": "jupiter",
    "latency": 123
  }
}
```

## Error Format

```json
{
  "success": false,
  "error": "NO_ROUTE",
  "details": {
    "providerTried": ["jupiter"],
    "reason": "No route found for this pair",
    "nextActions": ["try_again_later", "check_mint"]
  },
  "meta": {
    "requestId": "req_1234567890_abc123"
  }
}
```
