---
title: API Overview
---

# API Overview

Bags Shield provides a small set of endpoints focused on **signal over noise**.

## Base URL
Production (current):

```text
https://bags-shield-api.vercel.app/api
```

## Authentication
Some routes are public in beta. Partner routes require an API key.

```bash
curl -H "x-api-key: YOUR_KEY" \
  https://bags-shield-api.vercel.app/api/health
```

## Rate limits
- Requests are rate-limited for stability.
- On 429, back off and retry with jitter.

## Response format
All responses use an envelope:

```json
{
  "success": true,
  "response": {}
}
```

## Error format
```json
{
  "success": false,
  "error": "Human-readable error message"
}
```

## Core endpoints (v0)

### Scan
```text
POST /scan
```

### Simulate
```text
POST /simulate
```

### Apply (guarded execution)
```text
POST /apply
```

### Token analytics
```text
GET /token/{mint}/creators
GET /token/{mint}/lifetime-fees
```

## Versioning
- Prefer versioned routes when available (example: /v0/...)
- Breaking changes are announced in release notes
