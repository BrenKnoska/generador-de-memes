//1-URL tengo que agarrar una url de algo lado 
//y que con un evento se actualice el cuadrado de mi imagen
//para hacer esto necesito que js detecte del INPUT la url que escribi
// necesito que ese valor de url que guarde ponerlo como background-image de mi elemento container negro

//2-FONDO  necesito de mi INPUT color picker agarrar el color. Ese color que guarde ,
//cuando se efectue algu cambio tengo que actualizarlo en mi texto #0000...

//3-BLEND-MODE  esto tiene que actualizar cuando yo seleccione una opcion el "background-blend-mode"
//de mi container negro 

//4- FILTROS cada filtro tiene que guardar el valor de range en una variable. con esos valores voy a 
// actualizar el valor opacity,brillo,etc de mi container negro. asi con todos 

//5- restablecer filtros cuando apreto este boton TODOS los valores de las variables que 
//hice tienen que volver a cero 

//a- declaro las variables let,const
//panel imagen
const inicializarPaneles=()=>{

let panelImagen = document.getElementById("panel-imagen");
let guardarValorBtnImagen = document.getElementById('btnImagen');
let nombreVariable = 'valor';
let registroUnElementoHTML = document.getElementById('ACAELIDDELELEMENTOTALCUALSIN#');

//b- creo un a addeventlistener que reaccione a los cambios 

guardarValorBtnImagen.addEventListener('click', () => {
  ocultarPanel()
})

//registroUnElementoHTML.addEventListener('click',funcioQueEjecuto);
//c -hago la funcion que va a suceder cuando el addeventlistener escuche algo


const ocultarPanel = () => {
panelImagen.classList.add('no-mostrar');
  // if (nomostrar == true) {
  //   console.log("ahora es falso");
  //   panelImagen.classList.remove('no-mostrar');
  // }
}


}
const inicializar = () => {
  inicializarPaneles()
}

window.onload = inicializar
