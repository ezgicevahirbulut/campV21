console.log("add to basket")

console.log("add to basket")

console.log("add to basket")

console.log("add to basket")

console.log("add to basket")


function addToCart(productName ="Apple", quantity) {
    console.log("add to cart: " + productName + " quantity: " + quantity)
}

//addToCart()
addToCart("Egg",10)
//addToCart("Watermelon")


let sayHello = () => {
    console.log("Hello Wolrd")
}

sayHello()

let saySayHello = function(){
    console.log("hello world hello world")
}

saySayHello()


function addToCart2(productName2, quantity, unitPrice) {
    
}

addToCart2("apple", 5, 10)
addToCart2("pear", 3,5)
addToCart2("lemon",3,5)

let product1 = {productName: "apple", unitPrice:10, quantity:2}
function addToCart3(product){
    console.log("Product: " + product.productName + product.unitPrice + product.quantity )
}

addToCart3(product1)
