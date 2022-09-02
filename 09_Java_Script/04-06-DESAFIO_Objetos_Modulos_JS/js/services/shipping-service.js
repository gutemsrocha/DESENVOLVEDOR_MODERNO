export function shippment(order) {
	if (order < 100.0) {
		return 20.0;
	} else if (order < 200) {
		return 12.0;
	} else {
		return 0.0;
	}
}