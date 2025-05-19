import { Request, Response } from 'express';
import { OrderService } from '../services/OrderService';
import { Order } from '../types/Order';

export class OrderController {
  private orderService: OrderService;

  constructor() {
    this.orderService = new OrderService();
  }

  async createOrder(req: Request, res: Response): Promise<void> {
    try {
      const orderData: Omit<Order, 'id'> = {
        ...req.body,
        createdAt: Date.now(),
        updatedAt: Date.now()
      };

      const order = await this.orderService.createOrder(orderData);
      res.status(201).json(order);
    } catch (error) {
      res.status(500).json({ error: 'Error creating order' });
    }
  }

  async getOrder(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const order = await this.orderService.getOrder(id);

      if (!order) {
        res.status(404).json({ error: 'Order not found' });
        return;
      }

      res.json(order);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching order' });
    }
  }

  async getAllOrders(req: Request, res: Response): Promise<void> {
    try {
      const orders = await this.orderService.getAllOrders();
      res.json(orders);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching orders' });
    }
  }
} 