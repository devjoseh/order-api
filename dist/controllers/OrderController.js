"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const OrderService_1 = require("../services/OrderService");
class OrderController {
    constructor() {
        this.orderService = new OrderService_1.OrderService();
    }
    async createOrder(req, res) {
        try {
            const orderData = Object.assign(Object.assign({}, req.body), { createdAt: Date.now(), updatedAt: Date.now() });
            const order = await this.orderService.createOrder(orderData);
            res.status(201).json(order);
        }
        catch (error) {
            res.status(500).json({ error: 'Error creating order' });
        }
    }
    async getOrder(req, res) {
        try {
            const { id } = req.params;
            const order = await this.orderService.getOrder(id);
            if (!order) {
                res.status(404).json({ error: 'Order not found' });
                return;
            }
            res.json(order);
        }
        catch (error) {
            res.status(500).json({ error: 'Error fetching order' });
        }
    }
    async getAllOrders(req, res) {
        try {
            const orders = await this.orderService.getAllOrders();
            res.json(orders);
        }
        catch (error) {
            res.status(500).json({ error: 'Error fetching orders' });
        }
    }
}
exports.OrderController = OrderController;
