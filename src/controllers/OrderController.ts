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
      res.status(201).json({
        success: true,
        data: order
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Error creating order',
        message: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }

  async getOrder(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const order = await this.orderService.getOrder(id);

      if (!order) {
        res.status(404).json({
          success: false,
          error: 'Order not found'
        });
        return;
      }

      res.json({
        success: true,
        data: order
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Error fetching order',
        message: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }

  async getAllOrders(req: Request, res: Response): Promise<void> {
    try {
      const orders = await this.orderService.getAllOrders();
      res.json({
        success: true,
        data: orders
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Error fetching orders',
        message: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }
} 