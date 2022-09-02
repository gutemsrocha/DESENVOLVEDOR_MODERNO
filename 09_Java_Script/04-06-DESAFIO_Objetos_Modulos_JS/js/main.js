import Order from './models/order.js';
import * as orderService from './services/order-service.js';
import { shippment } from './services/shipping-service.js';


const dados = document.getElementById("orderDataInput").innerHTML.split("\n");
//console.log(dados); 

const order = new Order(dados[0], Number(dados[1]), Number(dados[2])); 
//console.log("Order: ", order);

//console.log("Code: ", order.code);

const shipp = shippment(order.basic);
//console.log("Shipp: ", shipp);

const discount = (order.basic * order.discount / 100 );
//console.log("Discount: ", order.discount);

const total = order.basic - discount + shipp;
//console.log("Total: ", total);


console.log(`Pedido codigo: ${order.code}`);
console.log(`Valor total R$: ${total.toFixed(2)}`);