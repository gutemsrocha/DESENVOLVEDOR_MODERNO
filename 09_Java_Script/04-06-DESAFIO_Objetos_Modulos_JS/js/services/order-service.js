import * as shippingService from './shipping-service.js'

export function total(order){

    const shipp = shippingService.shippment(order.basic);

    return order.basic - order.discount - shipp;

}