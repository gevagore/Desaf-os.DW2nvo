//Llamar etiquetaid desde JS
/*getElementById(es para id), document. se utiliza
para entrara  cualquer elemento del HTML,
es td el archivo HTML*/
let precioProducto= document.getElementById
('precioProducto');
let titulo = document.querySelector('#nombreProducto');
    //se le pone # con id y . con class

setTimeout(()=> {
    precioProducto.innerText = 'Precio: $450'
    titulo.style.color = 'red'
},5000)
//setTimeout es una funcion que sirve para que lo que este adentro se ejecute pasado el tiempo dado en milisegundos


/*Aca se podria poner tambien un alert 
o un swal.fire, con console.log se puede concatenar con suma o coma*/ 

//Para entregar desde github: Ir a Terminal y poner: 
//git init(para iniciar, pero es solo una vez cuando creamos el repositorio)
//git add .(para guardar, en este caso todo por el punto)
//git commit -m "Nombre de carpeta"

//git push origin main (para subir a repositorio)