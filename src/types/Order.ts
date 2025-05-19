export interface Order {
  id?: string;
  customerName: string;
  items: OrderItem[];
  total: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  createdAt: number;
  updatedAt: number;
}

export interface OrderItem {
  productId: string;
  name: string;
  quantity: number;
  price: number;
} 