function addToCart(quantity,productName="apple") {
    console.log("add to cart : product : " 
    + productName + " quantity : " + quantity)
}

//addToCart()
addToCart(10)
//addToCart(15)

let sayHello = ()=>{
    console.log("Hello World!")
}

sayHello()

let sayHello2 = function () {
    console.log("Hello World 2")
}

sayHello2();

function addToCart2(productName, quantity, unitPrice) {
    
}

addToCart2("apple",5,10)
addToCart2("pear", 2, 20)
addToCart2("lemon",3,15)

let product1 = {productName:"apple", unitPrice:10, quantity:5}

function addToCart3(product) {
    console.log("product : "+product.productName)
    console.log("quantity : "+product.quantity)
    console.log("Fiyat : "+product.unitPrice)
}


addToCart3(product1)

let product2 = {productName:"apple", unitPrice:10, quantity:5}
let product3 = {productName:"apple", unitPrice:10, quantity:5}
product2 = product3
product2.productName = "watermelon"
console.log(product3.productName)

let number1 = 10
let number2 = 20
number1 = number2
number2 = 100
console.log(number1)

function addToCart4(products) {
    console.log(products)
}

let products = [
    {productName:"apple", unitPrice:10, quantity:5},
    {productName:"pear", unitPrice:10, quantity:5},
    {productName:"watermelon", unitPrice:10, quantity:5}
]

addToCart4(products)

function add(smth,...numbers) { //rest
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(total)
    console.log(bisey)
}

add(20,30)
//add(20,30, 40)
//add(20,30, 40, 50)

let numbers = [30,10,500,600,120]
//console.log(...numbers)
console.log(Math.max(...numbers))

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
]

// console.log(icAnadolu.name)
// console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity } 
= {productName:"apple", unitPrice:10, quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)