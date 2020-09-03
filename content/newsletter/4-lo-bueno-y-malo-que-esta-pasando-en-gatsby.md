---
title: "Lo bueno y malo que está pasando en Gatsby #4"
slug: 4-lo-bueno-y-malo-que-esta-pasando-en-gatsby
date: "2020-09-03T17:29:16+00:00"
---
    

A Gatsby le ha pasado un poco como al fabricante de galletas de un pueblo remoto de Iowa que quiere innovar.

Hornea primero unas sabrosísimas cookies con trozos de chocolate y empieza a triunfar.

Luego amplía la oferta a unas galletitas con crujiente de avellana que son una locura y más caras.

En algún momento ve que es más productivo juntar ambas recetas y crea una supergalleta con trozos de chocolate y avellana. 

Y entonces la lía parda porque no gusta a ninguno de los que quería el sabor por separado.



Gatsby es un puntal de lanza en el mundo del Jamstack.

Es un SSG (Static Site Generator) de los más populares, con una gran comunidad, moviendo inversiones millonarias y es muy reconocible como tecnología deseada.

El 12 de agosto [unificaron](https://www.gatsbyjs.com/blog/announcing-unified-gatsby/) sus dos ramas de producto. En [GatsbyJS.com](https://www.gatsbyjs.com/) ahora encuentras la información del proyecto *open source* (el antiguo punto org) y también del producto de pago.

La maniobra no gustó y el CEO, Kyle Mathews, tuvo que salir al paso [justificando](https://www.gatsbyjs.com/blog/open-letter-to-gatsby-community/) que mantener dos proyectos en paralelo era mucho trabajo. Que no había nada oculto en esa unificación.



Ahora la web de Gatsby tiene la friolera de 12 opciones en su menú de navegación principal.

Le pasó como al de las galletas de Iowa, no hizo felices a muchos. 

Tampoco la promesa de nuevas y [espectaculares *features*](https://portal.gatsbyjs.com/tabs/5-in-progress) (Desktop, Admin, Recipes).



La cosa siguió y Nat Alison lanzó el mismo día un [hilo en twitter](https://twitter.com/tesseralis/status/1293649007739191296) donde destacaba las malas prácticas de la compañía con los trabajadores.

Entró un año antes para encargarse de la traducción de la documentación de Gatsby y, al cancelar el contrato un año después, nada de lo que había hecho se iba a publicar.



El asuntó siguió moviéndose por las redes revelando la superficialidad con la que se trata la diversidad y la inclusión en Gatsby Inc con ejemplos como el de la página de [creadores](https://github.com/gatsbyjs/gatsby/issues/19362).

El remate fue una [carta abierta](https://gist.github.com/gatsbyjs-employees/5b08b884be088bce54abaf4f980fbf7b) de 30 empleados apoyando a Nat y manifestando su deseo de mejora de las condiciones de trabajo. El CEO respondió disculpándose y remarcando el compromiso para solucionar estos problemas.



**Conclusión**

Las empresas nuevas y *molonas* también tienen problemas de comunicación. Lo que ocurre es que también es más sencillo que se hagan públicas para que todos aprendamos de ellos.

"En todos los sitios cuecen habas" y da igual lo prometedor que es un negocio. Hay que cuidar los detalles y, estos, suelen estar en el día a día y no en las grandes cifras.

El artículo más detallado sobre el tema: [Gatsby Faces Community Upheaval Over Commercialization Plans, Diversity Challenges](https://thenewstack.io/gatsby-faces-community-upheaval-over-commercialization-plans-diversity-challenges/).


## Imperdibles


### Búsquedas para sitios estáticos

Una de las características que los sitios estáticos no tienen de serie es las búsquedas internas en el contenido.

En el stack tradicional es un elemento siempre disponible, por sencillo que sea el sistema.

Tampoco es mucho más difícil hacerlo en Jamstack.

En este artículo nos hablan del flujo developer para ir dando con la solución perfecta para una web de una conferencia: servicios de terceros (Algolia), programación propia, buscadores del lado del cliente...

Primero probaron con Lunrjs y se quedaron con FuseJS. 

Es más rápido y más ligero que el primero. 

➡️ [Fast Search for Static Sites (JAMStack)](https://apvarun.com/blog/fast-search-for-static-sites/)



### Trello como CMS

He descubierto que una de las herramientas más comunes entre developers es Trello. Sirve para organizar tareas, pero, gracias a su API, también puede ser un gestor de contenido sencillo.

Si convertimos una de las columnas de un panel en el lugar donde se "publican" los contenidos y cada tarjeta es una sección de la página, ya tenemos la web.

¡Magia!

Casi, casi. Tenemos que echar mano de varias piezas, como siempre en el Jamstack: la API de Trello, Eleventy como SSG y Netlify para desplegar el resultado.

El órdago es que cada vez que actualicemos el panel se lance una nueva *build* en Netlify y la página se actualice. Maravilloso.

➡️ [Using Trello as a Super Simple CMS](https://css-tricks.com/using-trello-as-a-super-simple-cms/)



## Píldoras CocoStack


**[Renderizando la web en 2020](https://adrianalonso.es/desarrollo-web/renderizando-la-web-en-2020/)**
*#article* *#spanish*
Adrián Alonso nos cuenta cómo se puede renderizar una web y descubre que esconden los términos SSR, CSR, Rehydration y Prerendering.

**[Going Jamstack with React, Serverless, and Airtable](https://css-tricks.com/going-jamstack-with-react-serverless-and-airtable/)**

*#react* *#tutorial*

Un paso más allá nos lleva este tutorial contando como combinar herramientas de puro código como React con otras nocode como Airtable.

**[Nuevo SSG: ElderJS](https://elderguide.com/tech/elderjs/)**

*#javascript* *#ssg*

Un nuevo jugador se une a la lista de los generadores de sitios estáticos. Esta vez es ElderJS, basado en Svelte y con la vista puesta en el SEO.

**[Planty, una plantilla para ecommerce](https://github.com/snipcart/stackbit-theme-planty)**

*#ecommerce* *#theme*

Este repositorio esconde dos cosas: El código de una plantilla para ecommerce basada en Snipcart (alternativa a Shopify) y un post donde explican cómo usarla.

No te pierdas el siguiente envío de este newsletter: hablaremos de WordPress y del Jamstack.
 
¡Nos leemos en el próximo número!



[Dani](https://www.danielprimo.io/now)



`#CocoStack4 #CocoStack`