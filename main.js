const productos = [
    { nombre: "1: camiseta argentina", precio: 10500 },
    { nombre: "2: buzo puma", precio: 11000 },
    { nombre: "3: remera jordan", precio: 6500 },
    { nombre: "4: pantalon adidas", precio: 7500 },
    { nombre: "5: campera nike", precio: 12500 },
    ];
let carrito = []
    
let seleccion = prompt("Hola! Bienvenido a Cospe Indumentaria. Responda con Si o No, si desea comprar una prenda. Muchas Gracias.")

while(seleccion != "si" && seleccion != "no"){
alert ("Por favor ingresa si o no")
seleccion = prompt ("Hola! Bienvenido a Cospe Indumentaria. Responda con Si o No, si desea comprar una prenda. Muchas Gracias.")
}

if(seleccion == "si"){
alert ("Hace click en Aceptar para ver nuestro stock")
let todoslosProductos = productos.map(
    (producto) => producto.nombre + " " + producto.precio + "$");
alert(todoslosProductos.join(" - "))
    }else if (seleccion == "no"){
        alert("Gracias por visitar Cospe Indumentaria. Hasta pronto.")
    }

while (seleccion != "no"){
    let producto = prompt("Agrega al carrito")
    let precio = 0

if(producto == "camiseta argentina" || producto == "buzo puma" || producto == "remera jordan" || producto == "pantalon adidas" || producto == "buzo nike"){
    switch(producto) {
        case "camiseta argentina":
            precio = 10500;
            break;
        case "buzo puma":
            precio = 11000;
            break;
        case "remera jordan":
            precio = 6500;
            break;
        case "pantalon adidas":
            precio = 7500;
            break;
        case "buzo nike":
            precio = 12000;
            break;    
            default:
            break;    
        }
       let unidades = parseInt (prompt("Cuantas unidades quiere llevar?")) 
        carrito.push({producto, unidades, precio})
        console.log(carrito)
    } else {
        alert ("No tenemos esa prenda")
    }
    seleccion = prompt("Desea seguir comprando?")

    while(seleccion === "no"){
        alert("Gracias por su compra! Cospe Indumentaria te desea un excelente dia!")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades:${carritoFinal.unidades} Total a pagar por producto 
            ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }
} 

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades,0)
console.log(`El total a pagar por su compra es: ${total}`)
