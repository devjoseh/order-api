import { database } from '../config/firebase';
import { Order } from '../types/Order';
import { ref, push, set, get, child } from 'firebase/database';

export class OrderService {
  private ordersRef = ref(database, 'orders');

  async createOrder(order: Omit<Order, 'id'>): Promise<Order> {
    const orderRef = push(this.ordersRef);
    const newOrder: Order = {
      ...order,
      id: orderRef.key!,
      createdAt: Date.now(),
      updatedAt: Date.now()
    };

    await set(orderRef, newOrder);
    return newOrder;
  }

  async getOrder(id: string): Promise<Order | null> {
    const orderRef = child(this.ordersRef, id);
    const snapshot = await get(orderRef);
    return snapshot.val();
  }

  async getAllOrders(): Promise<Order[]> {
    const snapshot = await get(this.ordersRef);
    const orders: Order[] = [];
    snapshot.forEach((childSnapshot) => {
      orders.push(childSnapshot.val());
    });
    return orders;
  }
} 