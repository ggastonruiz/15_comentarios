/*1-Capturar los nodos necesarios para comentar*/
  // Por nodos me refiero a etiquetas html

  const boton = document.querySelector(".boton") //document es todo mi html
const input = document.querySelector(".input")
const comentarios = document.querySelector(".comentarios")

// console.log("boton", boton) ver en consola el NODO


/* 2-Crear una funcion que se ejecute cuando le haga click al boton*/ 
function comentar() {
    
/*Capturar el valor del imput*/
//console.log(input.value )//ver en consola el NODO
/* Agregar un comentario al div con clase comentarios */
 comentarios.innerHTML += `<p>${input.value}</p>   
}