---
title: Authentication
---

# Authentication

## API key header
Use x-api-key for partner endpoints:

```bash
curl -H "x-api-key: YOUR_KEY" https://bags-shield-api.vercel.app/api/health
```

## Bearer compatibility
Some integrations accept:

```text
Authorization: Bearer <key>
```

## Public vs protected
- v0 scan endpoints may be public during beta
- partner routes can require keys (throttled and audited)
