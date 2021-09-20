// No entiendo muy bien la estructura inicial de este codigo. 
// En el onload del window llamamos a la funcion inicializar, 
// que a su vez llama a otra funcion inicializarPaneles, 
// que se llama inicializarPaneles pero en realidad inicializa todo el codigo.
// Si mantenemos el onload, que considero correcto, deberia ejecutarse todo el codigo alli. 
// Las otras funciones son innecesarias, y complican la lectura de tu codigo.  

const inicializarPaneles = () => {
// Siempre usa camelCase en tus nombres de variables. No las inicies con mayúscula. 
  const link = document.querySelector('.texturl');
  const EscrituraSuperior = document.getElementById('SuperiorTexto');
  const EscrituraInferior = document.getElementById('InferiorTexto');
  const MemeTexto = document.querySelector('.Textsmeme');
  const MemeTextoAbajo = document.querySelector('.Bottomeme');
  const CheckSuperior = document.getElementById('checksupText')
  const CheckInferior = document.getElementById('checkinfText')
  const CheckTransparente = document.getElementById('checkTransparent')
  const AlineacionInicial = document.getElementById('RayasBotones')
  const AlineacionCentral = document.getElementById('RayasBotonesDos')
  const AlineacionFinal = document.getElementById('RayasBotonesTres')
  const TextoRadial = document.getElementById('colorFondoValue')
  const FondoRadial = document.getElementById('colorFondoValueDos')
  const btnCloseImg = document.getElementById('btnClosePanelImg')
  const btnCloseTxt = document.getElementById('btnClosePanelTxt')

  //--------------------------------------------------BOTONES NAV-----------------------------------------------------
  // Siempre usá const para variables de elementos del DOM. No van a cambiar de valor, 
  // asi que no deben ser let. 
  let panelImagen = document.getElementById("panel-imagen");
  let panelTexto = document.getElementById("panel-texto");

  let btnPanelImagen = document.getElementById('btnImagen');
  let btnPanelTexto = document.getElementById('btnTexto')
  let btnModoColor = document.getElementById('btnLight');
  //  -------------------------------------------------MODO OSCURO Y CLARO 1----------------------------------------------------------------------//
  let BodyContainer = document.querySelector('.Container');
  let BodyHeader = document.getElementById('contenedorBody');
  let HeaderButton = document.getElementById('btnImagen');
  let HeaderText = document.getElementById('btnTexto');
  let HeaderLight = document.getElementById('btnLight');
  let PieDePagina = document.getElementById('Pie');
  let BarraLateral = document.getElementById('panel-imagen');
  let LinkBarra = document.getElementById('barraLink');
  let FondColor = document.getElementById('selectorRosa');
  let SelectorColor = document.querySelector('input[type="color"]')
  let SelectorTexto = document.querySelector('input[type="text"]')
  let ReiniciarFiltro = document.getElementById('resetbutton')
  let TituloModoClaro = document.getElementById('GeneradorTexto')
  let ColorPanelTexto = document.getElementById('panel-texto')
  let Informacion = document.getElementById('SuperiorTexto')
  let InformacionInferior = document.getElementById('InferiorTexto')
  let PickearTexto = document.getElementById('textPick')
  let LineaTexto = document.getElementById('RayasBotones')
  let LineaTextoDos = document.getElementById('RayasBotonesDos')
  let LineaTextoTres = document.getElementById('RayasBotonesTres')
  let ListaDeNumeros = document.getElementById('Numeral')
  let TextoCuadro = document.getElementById('colorPickers')
  let TextoCuadroDos = document.getElementById('colorPickersDos')
  let PosicionNinguno = document.getElementById('Ninguno')
  let PosicionClaro = document.getElementById('Claro')
  let PosicionOscuro = document.getElementById('Oscuro')
  let NumberEspaciado = document.getElementById('NumeroEspaciado')
  let NumberInterlineado = document.getElementById('NumeroInterlineado')
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

  // Cuando el texto es muy largo, es buena práctica agregar saltos de linea para facilitar la lectura. 
  // Asi:
  // const valueFilter = () => { 
  //   imagen.style.filter = 
  //     `brightness(${FBrillo.value}) opacity(${FOpacity.value}) 
  //     blur(${FBlur.value}px) contrast(${FContrast.value}%) 
  //     grayscale(${FGray.value}%) hue-rotate(${FHue.value}deg) 
  //     sepia(${FSepia.value}%) saturate(${FSaturation.value}%) 
  //     invert(${FInvert.value})
  //     `
  //   }

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
  ReiniciarFiltro.addEventListener('click', BtnR);
  let CBlend = document.getElementById('colorBlend');
  CBlend.addEventListener('click', () => imagen.style.backgroundBlendMode = CBlend.value)



  // -------------------------------------------------------------TEXTOS DE IMAGEN----------------------------------------------------------------------------------------
  let FuenteTexto = document.getElementById('textPick');
  FuenteTexto.addEventListener('click', () => MemeTexto.style.fontFamily = FuenteTexto.value);

  let FuenteTextoDos = document.getElementById('textPick');
  FuenteTextoDos.addEventListener('click', () => MemeTextoAbajo.style.fontFamily = FuenteTextoDos.value);
  // -----------------------------------------------------------------INTERLINEADO---------------------------------------------------------------------------------------------
  
  // Aqui hay dos funciones para el mismo elemento, deberian estar las dos ordenes en la misma funcion
  let InterlineadoSuperior = document.getElementById('NumeroInterlineado');
  InterlineadoSuperior.addEventListener('click', () => MemeTexto.style.lineHeight = InterlineadoSuperior.value);

  let InterlineadoInferior = document.getElementById('NumeroInterlineado');
  InterlineadoInferior.addEventListener('click', () => MemeTextoAbajo.style.lineHeight = InterlineadoInferior.value);

  // ----------------------------------------------------------ESPACIADO---------------------------------------------------------------------------------------------------------------------
  const CambiarEspaciado = document.getElementById("NumeroEspaciado");
  const CambiarPadding = () => {
    const paddingValue = CambiarEspaciado.value;
    MemeTexto.style.padding = `${paddingValue}px 50px`
    MemeTextoAbajo.style.padding = `${paddingValue}px 50px`
  }
  CambiarEspaciado.addEventListener("input", CambiarPadding)

  //------------------------------------------------------------ TAMAÑO DE FUENTE  -----------------------------------
  const TamañoDeLetra = document.getElementById('Numeral');
  const CambiarFontSize = () => {
    MemeTexto.style.fontSize = TamañoDeLetra.value + "px";
    MemeTextoAbajo.style.fontSize = TamañoDeLetra.value + "px";
  }
  TamañoDeLetra.addEventListener('change', CambiarFontSize);

  // ----------------------------------------------------------CONTORNO DEL TEXTO------------------------------------------------------

  const Ninguno = document.getElementById('Ninguno');
  const Claro = document.getElementById('Claro');
  const Oscuro = document.getElementById('Oscuro');
  const changeStroke = (event) => {


    if (event.target === Ninguno) {
      MemeTexto.classList.remove('Oscuro', 'Claro');
      MemeTextoAbajo.classList.remove('Oscuro', 'Claro');
    } else if (event.target === Claro) {
      MemeTexto.classList.remove('Oscuro', 'Ninguno');
      MemeTextoAbajo.classList.remove('Oscuro', 'Ninguno');
      MemeTexto.classList.add('Claro');
      MemeTextoAbajo.classList.add('Claro');

    } else if (event.target === Oscuro) {
      MemeTexto.classList.remove('Claro', 'Ninguno');
      MemeTextoAbajo.classList.remove('Claro', 'Ninguno');
      MemeTexto.classList.add('Oscuro');
      MemeTextoAbajo.classList.add('Oscuro');
    }
  }

  Ninguno.addEventListener("click", changeStroke)
  Claro.addEventListener("click", changeStroke)
  Oscuro.addEventListener("click", changeStroke)

  // -------------------------------------------------------BOTÓN DESCARGAR--------------------------------------------------------------------------------
  const meme = document.querySelector('.memecontainer');
  const DescargaMeme = document.getElementById('botonDescargaMeme');

  const download = () => {
    domtoimage.toBlob(meme)
      .then(function (blob) {
        window.saveAs(blob, 'meme-download.png');
      });
  }

  DescargaMeme.addEventListener('click', download)

  // ---------------------------------------------------------EVENTOS FILTROS------------------------------------------------------------------------------
  // Cuando no estás interpolando variables, usá comillas simples o dobles, no los backticks
  FBrillo.addEventListener('click', () => valueFilter())
  FOpacity.addEventListener('click', () => valueFilter())
  FContrast.addEventListener(`click`, () => valueFilter())
  FBlur.addEventListener(`click`, () => valueFilter())
  FGray.addEventListener(`click`, () => valueFilter())
  FSepia.addEventListener(`click`, () => valueFilter())
  FHue.addEventListener(`click`, () => valueFilter())
  FSaturation.addEventListener(`click`, () => valueFilter())
  FInvert.addEventListener(`click`, () => valueFilter())
  // ---------------------------------------------------------SELECTORES RADIALES------------------------------------------------------------------------------
  let rgbNumber = document.querySelector('.numerocolor');

  PColor.addEventListener(`input`, () => {
    imagen.style.backgroundColor = PColor.value
    rgbNumber.innerText = PColor.value.toUpperCase()
  })

  TextoCuadro.addEventListener('input', () => {
    MemeTexto.style.color = TextoCuadro.value
    TextoRadial.innerText = TextoCuadro.value.toUpperCase()
    MemeTextoAbajo.style.color = TextoCuadro.value
  });
  TextoCuadroDos.addEventListener('input', () => {
    MemeTexto.style.backgroundColor = TextoCuadroDos.value
    FondoRadial.innerText = TextoCuadroDos.value.toUpperCase()
    MemeTextoAbajo.style.backgroundColor = TextoCuadroDos.value
  });

  // ---------------------------------------------------------INSERTAR IMAGEN URL----------------------------------------------------------------------------
  const cargarImagen = () => imagen.style.backgroundImage = `url("${link.value}")`;

  link.addEventListener('input', cargarImagen);
  // -------------------------------------------------------------------INSERTAR TEXTO SUPERIOR E INFERIOR---------------------------------------------------------------
  let cargarTextoSuperior = () => MemeTexto.innerText = EscrituraSuperior.value;
  EscrituraSuperior.addEventListener('input', cargarTextoSuperior);
  let cargarTextoInferior = () => MemeTextoAbajo.innerText = EscrituraInferior.value;
  EscrituraInferior.addEventListener('input', cargarTextoInferior);

  CheckSuperior.addEventListener('click', () => {
    // Privilegia usar siempre la comparacion estricta === frente a la normal ==
    // No necesitas hacer comparaciones contra booleanos:
    // if (CheckSuperior.checked) {
    if (CheckSuperior.checked == true) {
      MemeTexto.classList.add('no-mostrar');

    //   No necesitas un "else if" aca. Con un else alcanza, ya que si 
    //   checkSuperior no esta chequeado, la unica otra alternativa es que no lo esté, 
    //   es decir, que sea igual a false 
    // } else {
    } else if (CheckSuperior.checked == false) {
      MemeTexto.classList.remove('no-mostrar');
    }
  })
  CheckInferior.addEventListener('click', () => {
    // Mismas observaciones aqui
    if (CheckInferior.checked == true) {
      MemeTextoAbajo.classList.add('no-mostrar');

    } else if (CheckInferior.checked == false) {
      MemeTextoAbajo.classList.remove('no-mostrar');

    }
  })


  AlineacionInicial.addEventListener('click', () => {
    MemeTexto.style.justifyContent = "start"
    MemeTextoAbajo.style.justifyContent = "start"
  });

  AlineacionCentral.addEventListener('click', () => {
    MemeTexto.style.justifyContent = "center"
    MemeTextoAbajo.style.justifyContent = "center"
  });

  AlineacionFinal.addEventListener('click', () => {
    MemeTexto.style.justifyContent = "flex-end"
    MemeTextoAbajo.style.justifyContent = "flex-end"
  });

  CheckTransparente.addEventListener('click', () => {
    // Mismas observaciones aqui
    if (CheckTransparente.checked == true) {
      MemeTexto.classList.add('bannerTransparente');
      MemeTextoAbajo.classList.add('bannerTransparente');

    } else if (CheckTransparente.checked == false) {
      MemeTexto.classList.remove('bannerTransparente');
      MemeTextoAbajo.classList.remove('bannerTransparente');

    }
  })

  // ------------------------------------------------------------------PANEL------------------------------------------------------------------------------

  const cambiarPanel = (event) => {
// Aqui hay un problema que afecta el comportamiento de tu pagina. Al principio crei que
// ningun boton funcionaba, ya que hacia click en "texto" y no aparecia el panel. 
// Despues me di cuenta de que tenia que hacer click en el boton, pero no en el texto o 
// en el icono
// Cuando hago click en el boton sin apretar en el texto o en el icono, esta funcion anda correctamente. 
// Cuando hago click en el texto del boton, esta funcion se ejecuta, es decir, 
// JS reconoce que hubo un click en el elemento btnPanelImagen por ejemplo, 
//  **pero** el event.target no es el botón, sino el texto. Mismo si hago click en el icono. 

// No creo que haya sido la decision correcta poner los tres clicks en la misma funcion, 
// ya que hacen cosas diferentes. Un boton oculta el panel imagen y muestra el panel texto, 
// otro boton muestra el panel imagen y oculta el de texto, y el tercero cambia el modo oscuro o claro. 
// Creo que deberian ser funciones distintas. De paso te evitás este problema. 

    if (event.target.id == "btnImagen") {
      // No dejes codigo comentado en una entrega
      // if (BodyContainer.offsetWidth <= '768px') {
        
      // }
      panelImagen.classList.remove('no-mostrar');
      panelTexto.classList.add('no-mostrar');
    }

    else if (event.target.id == "btnTexto") {
      panelImagen.classList.add('no-mostrar');
      panelTexto.classList.remove('no-mostrar');
    }

    // --------------------------------------------------MODO OSCURO/MODO CLARO---------------------------------------------------------------------------------
    else if (event.target.id == "btnLight" && event.target.classList[1] == "darkMode") {
// Esta manera de implementar el modo oscuro / claro es correcta, pero creo que no es escalable. 
// Es decir, a futuro, si tu web crece, se le agregan secciones, etc, va a ser imposible
// seguir agregando cosas a esta funcion. 
// Una alternativa mas escalable es la que mencioné en clase: darle una clase al body cuando 
// se agrega modo-oscuro o modo-claro, y en el CSS darle estilos distintos a los descendientes 
// Si te genera dudas como hacerlo no dejes de escribirme. 
      btnModoColor.classList.add("lightMode");
      btnModoColor.classList.remove("darkMode");

      BodyContainer.style.backgroundColor = "#FDD9D2";
      BodyHeader.classList.add("bodyColorCoral");
      HeaderButton.classList.add("buttonColorLight");
      HeaderText.classList.add("buttonColorLight");
      HeaderLight.classList.add("buttonColorLight");
      PieDePagina.style.backgroundColor = "#FDD9D2";
      BarraLateral.classList.add("bodyColorLight");
      LinkBarra.classList.add("formHoverInput");
      FondColor.classList.add("formHoverBlanco");
      SelectorColor.classList.add("formHoverInput");
      CBlend.classList.add("formHoverBlanco");
      FondColor.style.border = "#FADCE9";
      SelectorTexto.classList.add("formHoverInput");
      ReiniciarFiltro.classList.add("formHoverBlanco");
      TituloModoClaro.classList.add("GeneradorTexto");
      ColorPanelTexto.classList.add("bodyColorLight");
      Informacion.classList.add("formHoverBlanco");
      InformacionInferior.classList.add("formHoverBlanco");
      PickearTexto.classList.add("formHoverBlanco");
      LineaTexto.classList.add("formHoverBlanco");
      LineaTextoDos.classList.add('formHoverBlanco');
      LineaTextoTres.classList.add('formHoverBlanco');
      ListaDeNumeros.classList.add("formHoverBlanco");
      TextoCuadro.classList.add("formHoverBlanco");
      TextoCuadroDos.classList.add("formHoverBlanco");
      PosicionNinguno.classList.add("formHoverBlanco");
      PosicionClaro.classList.add("formHoverBlanco");
      PosicionOscuro.classList.add("formHoverBlanco");
      NumberEspaciado.classList.add("formHoverBlanco");
      NumberInterlineado.classList.add("formHoverBlanco");
    }
    else if (event.target.id == "btnLight" && event.target.classList[1] == "lightMode") {

      btnModoColor.classList.add("darkMode");
      btnModoColor.classList.remove("lightMode");
      BodyContainer.style.backgroundColor = "#30343F";
      BodyHeader.classList.remove("bodyColorCoral");
      HeaderButton.classList.remove("buttonColorLight");
      HeaderText.classList.remove("buttonColorLight");
      HeaderLight.classList.remove("buttonColorLight");
      PieDePagina.style.backgroundColor = "#30343F";
      BarraLateral.classList.remove("bodyColorLight");
      LinkBarra.classList.remove("formHoverInput");
      FondColor.classList.remove("formHoverBlanco");
      SelectorColor.classList.remove("formHoverInput");
      CBlend.classList.remove("formHoverBlanco");
      ReiniciarFiltro.classList.remove("formHoverBlanco");
      TituloModoClaro.classList.remove("GeneradorTexto");
      ColorPanelTexto.classList.remove("bodyColorLight");
      Informacion.classList.remove("formHoverBlanco");
      InformacionInferior.classList.remove("formHoverBlanco");
      PickearTexto.classList.remove("formHoverBlanco");
      LineaTexto.classList.remove("formHoverBlanco");
      LineaTextoDos.classList.remove("formHoverBlanco");
      LineaTextoTres.classList.remove("formHoverBlanco");
      ListaDeNumeros.classList.remove("formHoverBlanco");
      TextoCuadro.classList.remove("formHoverBlanco");
      TextoCuadroDos.classList.remove("formHoverBlanco");
      PosicionNinguno.classList.remove("formHoverBlanco");
      PosicionClaro.classList.remove("formHoverBlanco");
      PosicionOscuro.classList.remove("formHoverBlanco");
      NumberEspaciado.classList.remove("formHoverBlanco");
      NumberInterlineado.classList.remove("formHoverBlanco");
    }
  }

  btnPanelImagen.addEventListener('click', (event) => cambiarPanel(event))
  btnPanelTexto.addEventListener('click', (event) => cambiarPanel(event))
  btnModoColor.addEventListener('click', (event) => cambiarPanel(event))


  btnCloseImg.addEventListener('click', () => {
   // panelImagen.style.display = "none";
    panelImagen.classList.add('no-mostrar');
  })

  btnCloseTxt.addEventListener('click', () => {
  
    panelTexto.classList.add('no-mostrar');
  })


}
const inicializar = () => {
  inicializarPaneles()
}

window.onload = inicializar
