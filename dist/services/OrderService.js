"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const firebase_1 = require("../config/firebase");
const database_1 = require("firebase/database");
class OrderService {
    constructor() {
        this.ordersRef = (0, database_1.ref)(firebase_1.database, 'orders');
    }
    async createOrder(order) {
        const orderRef = (0, database_1.push)(this.ordersRef);
        const newOrder = Object.assign(Object.assign({}, order), { id: orderRef.key, createdAt: Date.now(), updatedAt: Date.now() });
        await (0, database_1.set)(orderRef, newOrder);
        return newOrder;
    }
    async getOrder(id) {
        const orderRef = (0, database_1.child)(this.ordersRef, id);
        const snapshot = await (0, database_1.get)(orderRef);
        return snapshot.val();
    }
    async getAllOrders() {
        const snapshot = await (0, database_1.get)(this.ordersRef);
        const orders = [];
        snapshot.forEach((childSnapshot) => {
            orders.push(childSnapshot.val());
        });
        return orders;
    }
}
exports.OrderService = OrderService;
