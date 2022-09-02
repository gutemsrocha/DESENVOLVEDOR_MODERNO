//Java Script - CLASSES (syntatic sugar)
//CAPÍTULO: 04-02 (CRIANDO CLASSE)

class Product {
    
	constructor(name, price, quantity) {
		this.name = name;
		this.price = price;
		this.quantity = quantity;
	}

	total() {
		return this.price * this.quantity;
	}

	add(amount) {
		return (this.quantity += amount);
	}

	remove(amount) {
		if (this.quantity >= amount) {
			return (this.quantity -= amount);
		}
	}

	label() {
		return 'Dados: ' + this.name + ', ' + this.price.toFixed(2);
	}
}

const p1 = new Product("Monitor", 800.0, 10);
const p2 = new Product("Mouse", 50.0, 4);
