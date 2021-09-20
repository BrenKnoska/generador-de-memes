
# Observaciones

Brenda, felicitaciones por su trabajo. Tu TP se ve muy lindo, y se nota muchísimo el esfuerzo puesto en el código. Seguís a la perfección el diseño propuesto y se nota que hay mucho tiempo invertido en hacer que se vea lo mejor posible y que siga lo mas fielmente las pautas de diseño dadas. Me gusta mucho la paleta de colores del modo claro. Las funcionalidades están muy bien. 

Como dije en clase, este trabajo no se hace para que constates conocimientos, sino para que aprendas: en ese sentido, mi intencion es que estos comentarios te sirvan para aprender, mejorar tu codigo a futuro e ir apreciando mejor qué se espera de nosotras como desarrolladoras front end.

## Estructura correcta de documento HTML

Hay varias cosas a mejorar aquí. Lo primero es que tu web no funciona así como está: apenas la abra, voy a tener tres errores indicandome que hay un archivo de JS que no se puede encontrar. 

Los dos primeros errores se refieren a tipografías que estás importando en tu header, pero que no están en la carpeta que indicas:

```html
    <link rel="stylesheet" href="CSS/Font Awesome 5 Brands-Regular-400.otf">
    <link rel="stylesheet" href="CSS/Font Awesome 5 Free-Solid-900.otf">
```

En el código que subiste, dentro de la carpeta CSS, no se encuentran esos archivos otf. Por lo tanto tenemos un error, ya que HTML está tratando de importar archivos que no existen. 

El tercero, y más grave, se refiere a tu archivo de JS que estás importando al final del body:

```html
<script src="./scripts/script.js"></script>
```

No existe la carpeta scripts, por lo tanto ese archivo de JS no se puede importar. Aquí se te suma otro problema, y es que en el header sí estás importando JS de manera correcta, por lo que repetirlo aquí es un erorr. 

Lo correcto de todos modos es que el link a JS esté al final del body, por lo que yo diría que la etiqueta correcta (la que está en el header, que tiene bien la ruta a tu archivo) debería moverse al final del body, y borrar la que te menciono arriba. 

Otra cosa muy importante a mencionar es que usas la etiqueta `header` por afuera de la etiqueta `body`, lo que es incorrecto. La etiqueta `body` debe contener **todo** lo que ve el usuario, incluido el `header`. 

La pagina esta en español, pero el lenguaje del documento es ingles. Un lector de pantalla trataria de 
leerla en ingles (va a leer "yiniradour di mims") y buscadores como google van a recomendar esta web a 
angloparlantes. El `lang` del documento debe coincidir con el lenguaje que usan los usuarios de esta pagina.

Utilizás la etiqueta `<strong>` para darle grosor al texto: lamento no haber corregido tu portfolio, ya que te lo habría indicado allí, pero esto es incorrecto. Etiquetas como strong, br, son un resabio de viejas épocas en las cuales css no era tan poderoso como ahora, pero usarla hoy viola uno de los principios básicos de programación: la separación de responsabilidades. Los estilos se dan con css, la estructura se da con html. Una decisión de estilo como un espaciado entre dos elementos debe controlarse con css -flex, elementos en bloque, etc, no con `br`. Una decisión de estilo como el grosor de un texto debe darse con font-weight en CSS, no con `strong`. 

## Respeta el diseño dado

Cumplido en general. Los aside no ocupan el 100% del alto de la pantalla y no se ven bien. Consultame si no sabes como resolver eso. 

## Respeta el funcionamiento

En general, cumplido. 

- Al seleccionar los select, como el de "aclarar", "oscurecer", etc, para el fondo de la imagen, no pasa nada. Solo se aplica el efecto cuando vuelvo a hacer click en el select. Mismo con el de tipografias. Eso es porque no estás escuchando el evento `change` para tus select, sino el evento `click`. El evento 
`click` es para los botones. Usa `change` para los select. 

- Si hago click en "imagen" o "texto" para cambiar el panel muchas veces no funciona. Eso es porque estoy haciendo click sobre el texto o sobre el icono, y en tu JS vos dependes del click especifico del botón, y el id del botón, para saber qué hacer. Como vimos en clase, JS considera que un click en el texto que está adentro de un botón es un click en el texto primero y en el botón despues: en tu caso, si hago click en el texto, el texto no tiene el id del botón, entonces tu orden `event.target.id` falla. Avisame si esto te trae dudas y te lo explico mejor, es dificil por aca. 

- Un detalle, pero al eliminar el texto inferior o superior el div desaparece y toda la estructura se mueve. Compará con el comportamiento en el modelo de Ada (el div contenedor queda del mismo tamaño, la imagen se agranda para ocupar ese espacio). Considerá darle al div contenedor un height para evitar que pase esto. 

- El checkbox de fondo transparente no hace nada si tengo seleccionado un color de fondo. 

## Responsive funciona correctamente

A la perfección. 

## Buena estructura de proyecto

Falta un favicon, que es parte de la consigna. 

## Código bien indentado

Cumplido. 

## Comentarios que permiten mejorar la legibilidad del código

Impecables. 

## Uso correcto de etiquetas semánticas

Cumplido, con comentarios. El header incluye tambien ambos aside, lo que es incorrecto desde el punto de vista semántico y de accesibilidad. Son dos elementos separados, uno no debe contener al otro. 

El header debe estar adentro del body como ya te comenté. 

El div con la clase "Container" deberia ser una etiqueta `main`, ya que es la sección principal de tu web. 

El h1 del final no debería ser un h1, ya que no es el título principal de tu página (eso es "Generador de Memes"). Debería ser un `p` y estar contenido dentro de una etiqueta `footer`. 

Usás como títulos cosas que no lo son, como los h2 para "top text" y "bottom text". Aquí creo que hay una confusión: un texto **importante** no es lo mismo que un **título**. Un título encabeza secciones o subsecciones. Un texto importante, como el que sirve para cambiar el texto del meme, no tiene necesariamente que tener una etiqueta h1, h2 o h3, que está reservada para los titulos. Pensá en los títulos desde una perspectiva de diseño: cuáles son las secciones y subsecciones de mi web? Cuales son los títulos de esas secciones? En esta web creo yo hay tres secciones principales: la de editar meme, el panel aside de imagen, y el panel aside de texto. La sección de editar meme no tiene título, pero las otras dos sí: La palabra "texto" y la palabra "imagen". Ahí están tus h2. El h1 es el título de toda la página: lo que resume qué es está pagina y qué hace. A veces va a ser la marca, como en Despegar o Mercado Libre, otras veces va a ser tu nombre como en el portfolio, pero en este caso esta web es un generador de memes, y "Generador de Memes" es el título principal que debe tener un h1. El resto de los textos, aunque sean importantes, **no** son títulos, y no deberían tener etiquetas como h2 o h3. 

## Buenos nombres de clases

No cumplido. 

Noto algunas clases que tienen identidades confusas y problemas con lo que consideramos "descriptivo". Cuando decimos que un nombre de clase debe ser descriptivo, lo decimos en un sentido funcional: qué rol cumple este elemento en el código. Los colores de los elementos, su forma, su estilo, su posición, todas esas cosas pueden cambiar y efectivamente cambian todo el tiempo en las webs que hacemos. El botón que hoy es violeta mañana será azul; la sección que estaba a la derecha mañana estará arriba. Por lo tanto esos factores sos no son buenos descriptores, y no deberían ser parte de nuestros nombres de clases. Cosas como "firstCheck" y "twoCheck" deberían cambiarse para representar qué son en tu página: que uno esté arriba y otro abajo no debería influir en su nombre. Pensá tambien en nombres como "Textsmeme" y "Bottomeme": a primera vista esos nombres no me dicen lo que son los elementos - los inputs para elegir el texto de arriba y el texto de abajo del meme. 

En HTML por convención **no** escribimos mayúsculas en los nombres de clases, ids y datas (oporque riginalmente HTML no distinguía minúsculas de mayúsculas). Cuando necesitamos separar una palabra, usamos guiones. La clase "tituloheader" deberia ser "titulo-header", la clase "GeneradorTexto" debería ser "generador-texto", el id "btnImagen" debería ser "btn-imagen". Esta convención es muy, muy importante y te animo a que comiences a aplicarla lo antes posible en tus trabajos. 

## Buenos nombres de funciones y variables

Así como existe la convención de no usar mayúsculas en HTML y usar guiones, en JS existe la convención de escribir los nombres de variables y funciones en camelCase. Esto es: nuestros nombres se escriben en minúscula si son una sola palabra. Si son más de una palabra, la primera letra es minúscula pero cada comienzo de palabra va en mayúscula. Así tu variable "MemeTextoAbajo" debería ser "memeTextoAbajo". Esto es muy, muy importante ya que la mayúscula inicial significa algo muy específico en la convención de Javascript: señala una clase o un componente, elemento que veremos más adelante. 

Tus nombres en JS también deben ser descriptivos en sentido funcional. Tenés tendencia a abreviar de más, lo que es muy confuso para el lector. Quiero que los nombres de tus variables sean claros, que apenas los lea me pueda dar una idea de qué elemento se trata, o qué rol cumple esa variable. A primera vista, ¿qué es BtnR? ¿Qué es FInvert? ¿Qué es Informacion? Todos esos nombres deberían ser más claros. No te preocupes si quedan más largos de lo que querrías, si FInvert se converte en filtroInvertirFondo está bien. Es mejor pecar de exceso de claridad, que de falta. 

Usás `let` y `const` indistintamente, lo cual es un problema. En general siempre preferimos definir las variables como `const` a menos que estemos absolutamente seguras de que esa variable va a cambiar de valor en algún momento. Cuando se trata de variables auxiliares no es problema, pero usar `let` para variables de elementos de DOM es peligroso, ya que abrimos la puerta a que en el futuro alguien cambie el valor de esa variable y nuestro código deje de funcionar. Usá siempre `const` cuando estas definiendo variables para elementos del DOM y cuando estás definiendo funciones. 


## Reutilización de estilos

Cumplido. 

## Funciones pequeñas

Cumplido, aunque te dejé un par de comentarios para mejorarlo aún más. 

## Accesibilidad

No cumplido, hay muchas decisiones aquí que impactan muy negativamente en la accesibilidad de tu sitio. 

- Le diste "outline: none" a todos tus inputs, urls y botones. No puedo insistir lo suficiente en lo pernicioso que es esto: le quitaste a tus usuarios la posibilidad de navegar tu web por teclado. Cualquier persona que por dificultades motrices no pueda usar el mouse, no va a poder navegar tu web. No quiero ser dramática, pero es nuestro deber y responsabilidad como desarrolladoras web permitir que todos puedan usar nuestros sitios. Quitar el outline que viene por defecto es como comprar un edificio que tiene rampas para sillas de ruedas y reemplazarlas a todas por escaleras. Nunca, nunca, nunca quitamos el outline **a menos** que lo reemplacemos con una alternativa clara toda vez que un elemento está en foco. Ante la duda, mejor dejar el outline que viene por defecto. 

- Usas aria-hidden innecesariamente en tus íconos. Tus íconos no lo necesitan, ya que el lector de pantalla los ignora por defecto. 

- Falta aria-label en muchísimos elementos. Te dejo como ejemplo los botones para alinear texto:

```html
            <button class="liner whiteLetter" id="RayasBotones">
                <i class="fas fa-align-left" aria-hidden="true"></i>
            </button>
            <button class="liner whiteLetter" id="RayasBotonesDos">
                <i class="fas fa-align-center" aria-hidden="true"></i>
            </button>
            <button class="liner whiteLetter" id="RayasBotonesTres">
                <i class="fas fa-align-right" aria-hidden="true"></i>
            </button>
```

¿Como puede saber un usuario que depende del lector de pantalla qué son estos elementos? El ícono se ignora, y además tiene el aria-hidden. Ni el id ni el nombre de clase se leen. El usuario que depende del lector de pantalla no tiene idea para qué sirven estos botones. 

- Tu nombre permanece de color blanco en el modo claro, lo que viola la regla de siempre mantener el contraste adecuado entre fondo y color de texto. Debería ser oscuro en modo claro. 

## Commits con mensajes adecuados

Cumplido. Tenés muchos y buenos commits. Creo que se puede mejorar el readme agregando las tecnologías que usás en este TP. 


No creo en las notas. Una alumna puede tener determinada nota porque le faltó tiempo, otra porque le faltaron ganas, otra porque realmente no entendió. A veces un código está realmente muy mal, otras veces un código está realmente muy bien, como en este caso, pero hay partes de la consigna incumplidas. Una nota no me permite reflejar esas diferencias. Antes no las usaba, pero la presión popular del alumnado hizo que las incorporara :)

Te aclaro esto porque la nota que te doy sigue las pautas marcadas en las consignas de Ada, y la considero como un reflejo del estricto y exclusivo cumplimiento de esas consignas. Esta nota no habla de tu talento -que se nota es buenisimo- ni de tus ganas -que están reflejadas en este código. Te comenté muchas cosas: hay muchas cosas a mejorar, y eso es bueno. Es una oportunidad de aprender. Lo hermosa que está tu web, lo correcto de tu código, lo mucho que se aprecia tu aprendizaje, no se pueden apreciar del todo en una nota, y por eso insisto en mencionarlo aquí. En la nota, sólo evalúo el cumplimiento formal de las consignas. Tu trabajo es excelente, y tengo realmente muchas ganas de seguir viendo lo que hacés y cómo crecés como desarrolladora front end.

# Nota final: 7

