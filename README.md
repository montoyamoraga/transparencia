# transparencia

## Acerca de

transparencia es un proyecto de [aarón montoya-moraga](https://montoyamoraga.io/).

transparencia es un autorretrato multimedia en constante evolución. Actualmente incluye texto e imágenes con información sobre la identidad, creencias, salud, educación, empleo y contacto de su autore, entre otras cosas.

transparencia se puede visitar en <https://montoyamoraga.io/transparencia/>, y el código y la historia del proyecto viven en el repositorio <https://github.com/montoyamoraga/transparencia>.

## Tecnología

transparencia es una base de datos escrita en [YAML](https://es.wikipedia.org/wiki/YAML), leída con [js-yaml](https://github.com/nodeca/js-yaml) y [p5.js](https://p5js.org/) en un sitio web hecho con [HTML5](https://es.wikipedia.org/wiki/HTML5), con estilo en [CSS](https://es.wikipedia.org/wiki/Hojas_de_estilo_en_cascada), poblado con [JavaScript](https://es.wikipedia.org/wiki/JavaScript) y publicado con [GitHub Pages](https://pages.github.com/).

No usa herramientas de compilación ni dependencias instaladas: las bibliotecas están copiadas en la carpeta `libraries/`.

## Estructura

- `index.html`: la página, con su estilo.
- `js/sketch.js`: lee los datos y llena el menú y el contenido de cada categoría.
- `data/montoyamoraga.yaml`: los datos del autorretrato.
- `media/`: imágenes de las categorías cicatrices y salud-física.
- `libraries/`: p5.js 2.3.4 y js-yaml 4.1.1.

## Editar los datos

Cada clave de primer nivel de `data/montoyamoraga.yaml` es una opción del menú, y cada campo dentro de ella se muestra como `campo: valor`. El comentario al inicio del archivo explica el formato y cuándo usar comillas.

Las imágenes de las categorías cicatrices y salud-física están definidas en `js/sketch.js`. Si se renombran esas categorías en el YAML, hay que renombrarlas también ahí.

## Ver el sitio localmente

El sitio carga los datos con `fetch`, así que no funciona abriendo `index.html` directamente desde el disco. Hay que servirlo con un servidor local, por ejemplo:

```sh
python3 -m http.server
```

y abrir [http://localhost:8000](http://localhost:8000).

## Agradecimientos

- [Emma Rae Norton](http://marceldochamp.net/), por ser una presencia inspiradora en el taller [you.js](https://github.com/SFPC/workshops/tree/master/YOU_JS) dictado en [SFPC](http://sfpc.io/) por [Sam Lavigne](http://lav.io/).
- [Guillermo Montecinos-Peña](https://guillemontecinos.github.io/), por el apoyo moral.
- j., por el apoyo y el ánimo.
- [Lauren McCarthy](http://lauren-mccarthy.com/), por crear [p5.js](https://p5js.org/).
- [Nicolás Escarpentier](http://nicolaspe.com/), por sus excelentes sugerencias.
- [Rebecca (Marks) Leopold](http://site.rebeccaleopold.com/), por hacerme darme cuenta de que este tipo de proyectos que hago son en realidad autorretratos.
- [Roy MacDonald](http://roymacdonald.github.io/), por sus buenos comentarios.
- [Sam Lavigne](http://lav.io/), por el taller [you.js](https://github.com/SFPC/workshops/tree/master/YOU_JS) que dictó en [SFPC](http://sfpc.io/), donde me inspiré para empezar este proyecto.
- [Wipawe Sirikolkarn](http://www.wipawe.com/), por asegurarse de que yo esté a salvo.
