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

### Development

To build and start all services locally:

```bash
# Build and start all containers in detached mode
docker-compose up --build -d

# To view logs
docker-compose logs -f

# To stop all services
docker-compose down
```

### Production

To run using pre-built images from DockerHub:

1. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```

2. Update the `.env` file with your DockerHub username:
   ```
   DOCKERHUB_USERNAME=yourusername
   ```

3. Run using the production docker-compose file:
   ```bash
   docker-compose -f docker-compose.prod.yml up -d
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

## CI/CD with GitHub Actions

This project uses GitHub Actions to automatically build and push Docker images to DockerHub whenever changes are pushed to the repository.

### Setting up GitHub Secrets

To use the CI/CD pipeline, you need to set up the following secrets in your GitHub repository:

1. Go to your GitHub repository
2. Navigate to Settings > Secrets and variables > Actions
3. Add the following secrets:
   - `DOCKERHUB_USERNAME`: Your DockerHub username
   - `DOCKERHUB_TOKEN`: Your DockerHub access token (not your password)

### Workflow Details

The GitHub Actions workflow performs the following steps:
1. Lint the code with ESLint
2. Build Docker images for each service
3. Push the images to DockerHub with appropriate tags
4. Prepare for deployment (placeholder step)

Images will be published to DockerHub with the following naming convention:
- `[username]/cafe-management-api-gateway`
- `[username]/cafe-management-order-services`
- `[username]/cafe-management-payment-services`
- `[username]/cafe-management-menu-services`
- `[username]/cafe-management-inventory-services`
- `[username]/cafe-management-customer-services`

Each image will have multiple tags:
- The branch name
- The short SHA of the commit
- `latest` 