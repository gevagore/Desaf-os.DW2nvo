const arrayProductos = ['Collar', 'pulcera', 'anillo', 'arete']
// let para asignar variable, los arrays siempre son entre corchetes
//lo que quiero modificar

// el prod es el indice(i) de nuestro array
for (let prod of arrayProductos){ /*el bucle for of cumple una funcion similar al for normal(inicializacion; condicion; actializacion)
    solo que en este caso*/
    let h2 = document.createElement("h2"); //decimos que queremos crear un documento h2
    h2.innerHTML =`<p>Nombre: <span style="color: fuchsia"> ${prod}</span></p>` //usar backticks/tilde invertida para concatenar sin usar comillas y +
    /*El inner es para agregar o cambiar contenido, en este caso un html */
    document.body.appendChild(h2)
    /* del documento, en la parte body, se va a agregar(appendChild) un(en este caso, varios)h2 
    (est es para conectar lo que hicimos en js con el DOM)*/
    //appendchild: para agregar un nuevo elemento (nodo) como hijo de otro elemento existente en el DOM
}

console.dir(document)
/*el metodo dir() de console es una manera de ver todas las propiedades de un onjeto js especifico
para consola, mientras que el log imprime una representacion del objeto por consola */

//Para entregar desde github: Ir a Terminal y poner: 
//git init(para iniciar, pero es solo una vez cuando creamos el repositorio)
//git add .(para guardar, en este caso todo por el punto)
//git commit -m "Nombre de carpeta"

//git push origin main (para subir a repositorio)