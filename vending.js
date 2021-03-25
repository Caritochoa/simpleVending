/* eslint-disable */

var sum = function (a, b) {
    return a + b;
}


class Vending_machine {
    constructor() {// The paremeters are not clear.        
        this.products = []

    }

    addProduct(product) {
        this.products.push(product)
    }

    hasproduct(name) {
        for (i = 0; i < this.products.length; i++) {
            if (this.products[i].name == name) {
                return true
            }

        }
        return false
    }
    productOperation(product) {
        for (i in products) {
            return products[i].name;  
            }        
    }

    productChangeOperation (money, product) {
        return money - product.price;
    }
    
    getallproducts(products) {
        return products.map(item => {
            return item;
        })
    }
    getproductById(products, product_id) {
        for (i in products) {
            if (products[i].product_id == product_id) {
                return products[1];
            }
        }
    }
}



class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    transform(price) {
        return this.price.toString();
    }

}


module.exports = {
    Product: Product,
    Vending_machine: Vending_machine,
    sum 
    
}




