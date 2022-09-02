import Order from './models/order.js';
import * as orderService from './services/order-service.js';

const data = document.getElementById("orderInput").innerHTML.split('\n').map(x => Number(x));

const order = new Order(data[0], data[1], data[2]);

const total = orderService.total(order);

console.log(`Pedido código ${order.code}`)
console.log(`Valor total = R$ ${total.toFixed(2)}`);
