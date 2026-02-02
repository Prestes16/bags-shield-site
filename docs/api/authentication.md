# Authentication

Most API endpoints require authentication via API key.

## API Key

Include your API key in the `x-api-key` header:

```bash
curl -H "x-api-key: YOUR_API_KEY" \
  https://app.bags-shield.com/api/v0/swap/quote
```

## Getting an API Key

Contact support@bags-shield.com to request an API key.

## Rate Limits

- **Free**: 100 requests/minute
- **Pro**: 1000 requests/minute
