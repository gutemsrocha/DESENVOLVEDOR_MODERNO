//Java Script - CONSTRUTORES E PROTOTYPE
//CAPÍTULO: 04-01 (CONSTRUTORES E PROTOTYPE)

const p1 = {
    name: "Computador",
    price: 3000.0,
    quantity: 2
}

const Product = function(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

Product.prototype.total = function() {
    return this.price * this.quantity;
}

Product.prototype.add = function(amount) {
    this.quantity += amount;
}

Product.prototype.remove = function(amount) {
    if (this.quantity >= amount) {
        this.quantity -= amount;
    }
}

// função Label ".label()" => É uma função para retornar os dados do produto na forma de String.
// É como se fosse um RÓTULO DO PRODUTO.

// OBSERVAÇÃO
// Apesar de estarmos utilizando o método ".label()", para fins didáticos, 
// o Java Script também possui o método "toString()" para impressão de dados. 


Product.prototype.label = function() {
    return "Dados: " + this.name + ", " + this.price.toFixed(2);
}

const p2 = new Product("Monitor", 800.0, 10);

const p3 = new Product("Mouse", 50.0, 4);




