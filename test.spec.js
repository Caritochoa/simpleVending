/* eslint-disable */

const { sum } = require('./vending')
const { Product } = require('./vending')
const { Vending_machine } = require('./vending')
const { productChangeOperation } = require('./vending')
const { getallproducts } = require('./vending')
const { getproductById } = require('./vending')
const chai = require('chai')
var expect = chai.expect

describe('All set tests', function () { // test that jest is properly set up.
    it('sums properly', function () {
        expect(sum(1, 3)).to.equal(4);
    });
    
    it('toString method works', function(){
        var testProduct = new Product("someProduct", 5)
        result = testProduct.transform();
        expect(result).to.equal("5");
    })

describe('refactor tests', function(){
    it('test the return Product Method', function(){
        var coffee = new ("coffee", 4);
        var  result = coffee.toString();        
        expect(result).to.equal("coffee");
    })

    it('test the productChangeOperation function', function(){
        var money = 10;
        var coffee = new Product("coffee", 4);
        var result = productChangeOperation(money, coffee);
        expect(result).to.equal(6);
    })
});

describe('getting the products', function(){
    var toyotaVending = new Vending_machine(      
    products = [
        {
            product_id: 1,
            name: "coffee",
            price: 4
        },
        {
            product_id: 2,
            name: "tea",
            price: 5
        },
        {
            product_id: 3,
            name: "chcolate",
            price: 5
        },
    ])

    it('return all products', function(){       
     

    });
   
    it('return all products by id', function(){
        
        var expected = toString({"name": "tea", "price": 5, "product_id": 2});
        result = toString(getproductById(products, 2));
        expect(result).to.equal(expected);

    });

})})
