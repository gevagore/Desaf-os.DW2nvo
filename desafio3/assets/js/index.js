let nombreProducto = "Pulsera" // let: para definir variable
let precioUnidad = 1000 //let: Crea variable modificable
let cantidadDeseada = parseInt(prompt('Ingrese la cantidad de: '+ nombreProducto + ' que desea comprar:')) //prompt: Para pedir al usuario
//Swal.fire ("Hola, estas a punto de comprar un producto: " + prod1 + ' y su precio es de: ' + precioUnidad); //"+" Para concatenar y relacionar texto con variable 

let costoSinDescuento = precioUnidad * cantidadDeseada 

if(cantidadDeseada >= 5){
    costoSinDescuento *= 0.9
}

swal.fire(`El costo total de ${cantidadDeseada} ${nombreProducto} es de $${costoSinDescuento}`)
    

//Para entregar desde github: Ir a Terminal y poner: 
//git init(para iniciar)
//git add .(para guardar, en este caso todo por el punto)
//git commit -m "Nombre de carpeta"

//git push origin main (para subir a repositorio)