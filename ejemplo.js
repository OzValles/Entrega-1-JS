

let buying = true,
total = 0,
discount = 0

const getDiscount = total => {
if (total > 2000){
    discount = total * 0.2
    total = total - discount
}else if (total <= 2000 && total > 1000){
    discount = total * 0.15
    total = total - discount
}else{
    discount = total * 0.1
    total = total - discount
}
return total
}

const addToCart = product => {
switch (product) {
    case 1:
        total += 500
        break;
    case 2:
        total += 800
        break;
    case 3:
        total += 1000
        break;
    case 4:
        total += 750
        break;
}
}

while (buying) {
let products = parseInt(prompt("Elija que producto desea agregar al carrito: 1.Puma($500), 2.Adidas($800), 3.Jordan($1000), 4.Nike($750"))
addToCart(products)

let keepBuying = prompt("¿Desea seguir comprando? (si/no):")
while (keepBuying !== "no" && keepBuying !== "si") {
    keepBuying = prompt("Responda: si/no")
}

if (keepBuying === "no") {
    buying = false
    total = getDiscount(total)
}
}

alert(`El total de su compra es de: $${total}. Ahorrado: $${discount}`)