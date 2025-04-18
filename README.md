# Cafe Management System

A microservices-based cafe management system consisting of:
- API Gateway
- Order Service
- Payment Service
- Menu Service
- Inventory Service
- Customer Service

## Prerequisites

- Docker and Docker Compose installed on your system
- Node.js (for local development without Docker)

## Running with Docker

To build and start all services:

```bash
# Build and start all containers in detached mode
docker-compose up --build -d

# To view logs
docker-compose logs -f

# To stop all services
docker-compose down
```

## Service Endpoints

Once running, the services will be available at:

- API Gateway: http://localhost:3000
- Order Service: http://localhost:3001
- Payment Service: http://localhost:3002
- Menu Service: http://localhost:3003
- Inventory Service: http://localhost:3004
- Customer Service: http://localhost:3005

## API Routes

All services are accessible through the API Gateway:

- Menu items: http://localhost:3000/menu
- Orders: http://localhost:3000/orders
- Payments: http://localhost:3000/payments
- Inventory: http://localhost:3000/inventory
- Customers: http://localhost:3000/customers

## Development

For local development without Docker:

```bash
# Install dependencies for each service
cd [service-directory]
npm install

# Run a service
node index.js
``` 