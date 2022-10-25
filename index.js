
let compra = true;
let total = 0
let descuento =0

const carrito = productos => {
    switch (productos){
        case 1 :
            total += 200
            break;
        case 2 :
            total += 300
            break;
        case 3 :
            total += 150
            break;
        case 4 : 
            total += 400
            break;    
    }
    
}

while (compra){
    let productos = parseInt(prompt('Elija el producto a comprar: 1.Cortador (200), 2.PortaAudifonos (300), 3.DinoClips (150), 4.Porta Lapicez (400)'))
    
    carrito (productos)

    let seguirComprando = prompt('Quiere seguir Comprando, si / no ')
    while (seguirComprando !== 'si' && seguirComprando!== 'no') {
        seguirComprando = prompt ('Conteste correctamente si o no')
    }

    if(seguirComprando==='no'){
        compra=false

        total= total
    }
}


alert(`El total de su compra es de : ${total}`)