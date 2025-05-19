import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { OrderController } from './controllers/OrderController';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const orderController = new OrderController();

// Routes
app.post('/orders', (req, res) => orderController.createOrder(req, res));
app.get('/orders/:id', (req, res) => orderController.getOrder(req, res));
app.get('/orders', (req, res) => orderController.getAllOrders(req, res));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 