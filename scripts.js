const inicializarPaneles = () => {

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



  //--------------------------------------------------BOTONES NAV-----------------------------------------------------
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
    if (CheckSuperior.checked == true) {
      MemeTexto.classList.add('no-mostrar');

    } else if (CheckSuperior.checked == false) {
      MemeTexto.classList.remove('no-mostrar');
    }
  })
  CheckInferior.addEventListener('click', () => {
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

    if (event.target.id == "btnImagen") {
      panelImagen.classList.remove('no-mostrar');
      panelTexto.classList.add('no-mostrar');
    }

    else if (event.target.id == "btnTexto") {
      panelImagen.classList.add('no-mostrar');
      panelTexto.classList.remove('no-mostrar');
    }

    // --------------------------------------------------MODO OSCURO/MODO CLARO---------------------------------------------------------------------------------
    else if (event.target.id == "btnLight" && event.target.classList[1] == "darkMode") {

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
      //      CBlend.style.backgroundColor="#252935";
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



}
const inicializar = () => {
  inicializarPaneles()
}


//una vez que cargue todo comienzo a iniciar las diferentes secciones,no antes porque sino todo llega nulo
window.onload = inicializar
