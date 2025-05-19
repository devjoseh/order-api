# Order API

A TypeScript API for order management using Firebase Realtime Database.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Build the project:
```bash
npm run build
```

3. Start the server:
```bash
npm start
```

For development with hot-reload:
```bash
npm run dev
```

## API Endpoints

### Create Order
- **POST** `/orders`
- Body:
```json
{
  "customerName": "John Doe",
  "items": [
    {
      "productId": "123",
      "name": "Product 1",
      "quantity": 2,
      "price": 29.99
    }
  ],
  "total": 59.98,
  "status": "pending"
}
```

### Get Order by ID
- **GET** `/orders/:id`

### Get All Orders
- **GET** `/orders` 