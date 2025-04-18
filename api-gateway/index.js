const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const port = 3000;

app.use(express.json());

// Get service URLs from environment variables
const orderServiceUrl = process.env.ORDER_SERVICE_URL || 'http://localhost:3001';
const paymentServiceUrl = process.env.PAYMENT_SERVICE_URL || 'http://localhost:3002';
const menuServiceUrl = process.env.MENU_SERVICE_URL || 'http://localhost:3003';
const inventoryServiceUrl = process.env.INVENTORY_SERVICE_URL || 'http://localhost:3004';
const customerServiceUrl = process.env.CUSTOMER_SERVICE_URL || 'http://localhost:3005';

// Proxy routes to respective services
app.use('/menu', createProxyMiddleware({ target: menuServiceUrl, changeOrigin: true }));
app.use('/orders', createProxyMiddleware({ target: orderServiceUrl, changeOrigin: true }));
app.use('/payments', createProxyMiddleware({ target: paymentServiceUrl, changeOrigin: true }));
app.use('/inventory', createProxyMiddleware({ target: inventoryServiceUrl, changeOrigin: true }));
app.use('/customers', createProxyMiddleware({ target: customerServiceUrl, changeOrigin: true }));

app.listen(port, () => {
  console.log(`API Gateway running on port ${port}`);
  console.log(`Routing to services:`);
  console.log(`- Menu Service: ${menuServiceUrl}`);
  console.log(`- Order Service: ${orderServiceUrl}`);
  console.log(`- Payment Service: ${paymentServiceUrl}`);
  console.log(`- Inventory Service: ${inventoryServiceUrl}`);
  console.log(`- Customer Service: ${customerServiceUrl}`);
});