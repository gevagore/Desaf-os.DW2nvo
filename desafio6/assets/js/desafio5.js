let producto = {
    nombre:'camiseta',
    precio:250,
    stock:1
} //Objeto
//let productos = [] //Array
// La diferencia es que en objeto se dividen en dos, llave y valor
// Los array son como una caja que contienen varios datos, se puedenn agregar distintos tipos de datos, hasta tmb con objetos, pero de ahi seria con corchetes []
producto.nombre = "Zapatillas"

producto.categoria= "Calzado"
//se agrega otra categoria que es calzadp

delete producto.stock
//Se va  aborrar el stock
console.log(producto)
console.log(producto.stock)

console.log('Se acabó el stock luego de su compra')


/*Aca se podria poner tambien un alert 
o un swal.fire, con console.log se puede concatenar con suma o coma*/ 

//Para entregar desde github: Ir a Terminal y poner: 
//git init(para iniciar, pero es solo una vez cuando creamos el repositorio)
//git add .(para guardar, en este caso todo por el punto)
//git commit -m "Nombre de carpeta"

//git push origin main (para subir a repositorio)