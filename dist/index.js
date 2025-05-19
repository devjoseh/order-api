"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const OrderController_1 = require("./controllers/OrderController");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const orderController = new OrderController_1.OrderController();
app.post('/orders', (req, res) => orderController.createOrder(req, res));
app.get('/orders/:id', (req, res) => orderController.getOrder(req, res));
app.get('/orders', (req, res) => orderController.getAllOrders(req, res));
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
