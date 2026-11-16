# Proposed REST API contract (design exercise)

These are proposed endpoints for the next backend milestone, not live services.

| Method | Endpoint | Purpose | Example body |
|---|---|---|---|
| GET | `/api/v1/products` | List/search/filter products | Query: `?category=Fruits&q=apple` |
| GET | `/api/v1/products/:id` | Product detail | — |
| POST | `/api/v1/auth/register` | Create account | `{ "name": "Asha", "email": "asha@example.com", "password": "..." }` |
| POST | `/api/v1/auth/login` | Authenticate | `{ "email": "asha@example.com", "password": "..." }` |
| GET | `/api/v1/cart` | Retrieve current user's cart | Auth required |
| POST | `/api/v1/orders` | Create an order | `{ "items": [{"productId":"tomato","quantity":2}] }` |
| GET | `/api/v1/orders` | List user's orders | Auth required |

## Example product response

```json
{
  "data": [
    { "id": "tomato", "name": "Farm-fresh tomatoes", "category": "Vegetables", "price": 40, "unit": "500 g", "currency": "INR" }
  ],
  "meta": { "count": 1 }
}
```

Use HTTPS, validate inputs on the server, enforce authorization on protected routes, avoid storing raw passwords, and never store payment-card details in this application.
