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

//a- declaro las variables let,const y las inicializo, sino siempre me devuelven null
//panel imagen


const inicializarPaneles = () => {

  const link = document.querySelector('.texturl');

  //--------------------------------------------------BOTONES NAV-----------------------------------------------------  
  let panelImagen = document.getElementById("panel-imagen");
  let panelTexto = document.getElementById("panel-texto");

  let btnPanelImagen = document.getElementById('btnImagen');
  let btnPanelTexto = document.getElementById('btnTexto')
  let btnModoColor = document.getElementById('btnLight');
  //  ------------------modo oscuro y modo claro----------------------------------------------------------------------//
  let BodyContainer = document.querySelector('.Container');
  // -----------------------------------------------------FILTRO DE IMAGEN--------------------------------------------------------------------------------
  let imagen = document.querySelector('.Containernegro');
  let FBrillo = document.getElementById('brightneSlider');
  let FOpacity = document.getElementById('opacitySlider');
  let FGray = document.getElementById('grayScaleSlider');
  let FContrast = document.getElementById('contrastSlider');
  let FBlur = document.getElementById('blurSlider');
  let FSepia = document.getElementById('sepiaSlider');
  let FHue = document.getElementById('hueRotateSlider');
  let FSaturation = document.getElementById('saturateSlider');
  let FInvert = document.getElementById('invertSlider');
  let PColor = document.getElementById('colorPicker');
  const resetbutton = document.querySelector('.resetbutton');
  const valueFilter = () => imagen.style.filter = `brightness(${FBrillo.value}) opacity(${FOpacity.value}) blur(${FBlur.value}px) contrast(${FContrast.value}%) grayscale(${FGray.value}%) hue-rotate(${FHue.value}deg) sepia(${FSepia.value}%) saturate(${FSaturation.value}%) invert(${FInvert.value})`;
  const BtnR = () => {
    FBrillo.value = 1;
    FOpacity.value = 1;
    FContrast.value = 100;
    FBlur.value = 0;
    FGray.value = 0;
    FSepia.value = 0;
    FHue.value = 0;
    FSaturation.value = 100;
    FInvert.value = 0;
    valueFilter()
  }
  // ---------------------------------------------------------MODO DE FUSIÓN-------------------------------------------------------------------------------
  resetbutton.addEventListener('click', BtnR);
  let CBlend = document.getElementById('colorBlend');
  CBlend.addEventListener('click', () => imagen.style.backgroundBlendMode = CBlend.value)


  // ---------------------------------------------------------EVENTOS FILTROS------------------------------------------------------------------------------
  FBrillo.addEventListener('click', () => valueFilter())
  FOpacity.addEventListener('click', () => valueFilter())
  FContrast.addEventListener(`click`, () => valueFilter())
  FBlur.addEventListener(`click`, () => valueFilter())
  FGray.addEventListener(`click`, () => valueFilter())
  FSepia.addEventListener(`click`, () => valueFilter())
  FHue.addEventListener(`click`, () => valueFilter())
  FSaturation.addEventListener(`click`, () => valueFilter())
  FInvert.addEventListener(`click`, () => valueFilter())
  // ---------------------------------------------------------SELECTOR RADIAL------------------------------------------------------------------------------
  let rgbNumber = document.querySelector('.numerocolor');

  PColor.addEventListener(`input`, () => {
    imagen.style.backgroundColor = PColor.value
    rgbNumber.innerText = PColor.value.toUpperCase()
  })


  // ---------------------------------------------------------INSERTAR IMAGEN URL----------------------------------------------------------------------------
  const cargarImagen = () => imagen.style.backgroundImage = `url("${link.value}")`;

  link.addEventListener('input', cargarImagen);
  // ------------------------------------------------------------------PANEL------------------------------------------------------------------------------

  const cambiarPanel = (event) => {

    if (event.target.id == "btnImagen") {
      panelImagen.classList.remove('no-mostrar');
      panelTexto.classList.add('no-mostrar');
    }

    else if (event.target.id == "btnTexto") {
      panelImagen.classList.add('no-mostrar');
      panelTexto.classList.remove('no-mostrar');
    }
    else if (event.target.id == "btnLight" && event.target.classList[1] == "darkMode") {
      //haceresto otro 
      btnModoColor.classList.add("lightMode");
      btnModoColor.classList.remove("darkMode");

      BodyContainer.style.backgroundColor = "#FFFFFF";

    }
    else if (event.target.id == "btnLight" && event.target.classList[1] == "lightMode") {
      //haceresto otro 
      btnModoColor.classList.add("darkMode");
      btnModoColor.classList.remove("lightMode");

      BodyContainer.style.backgroundColor = "#000000";

    }
  }


  btnPanelImagen.addEventListener('click', (event) => cambiarPanel(event))
  btnPanelTexto.addEventListener('click', (event) => cambiarPanel(event))
  btnModoColor.addEventListener('click', (event) => cambiarPanel(event))



}
const inicializar = () => {
  inicializarPaneles()
}


//una vez que cargue todo comienzo a iniciar las diferentes secciones,no antes porque sino todo llega nulo
window.onload = inicializar
