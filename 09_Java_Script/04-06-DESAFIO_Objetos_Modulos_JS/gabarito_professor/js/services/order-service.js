import * as shippingService from './shipping-service.js';

export function total(order) {

    const shipment = shippingService.shipment(order);
    const discount = order.basic * order.discount / 100.0;
    
    return order.basic - discount + shipment;
}
