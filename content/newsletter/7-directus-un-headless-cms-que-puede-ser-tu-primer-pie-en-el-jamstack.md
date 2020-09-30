---
title: "Directus, un Headless CMS que puede ser tu primer pie en el Jamstack #7"
slug: 7-directus-un-headless-cms-que-puede-ser-tu-primer-pie-en-el-jamstack
date: "2020-09-24T11:31:01+00:00"
---
    

Al aterrizar en un nuevo planeta nos pasa que tenemos que preocuparnos de muchas cosas:

- ¿Se puede respirar aquí?
- ¿La gravedad será suficiente?
- ¿Por qué tuve que ver la peli de alien anoche?
- ¿Me dejé el aire acondicionado encendido?



Así de literal.

Las preguntas vienen germinan en la base de tu experiencia.

Estás acostumbrado a respirar por la nariz, estas sujeto al suelo y dejar apagado el climatizador.



Lo mismo ocurre cuando llegas al Jamstack y eres developer de toda la vida.

Ya tienes tu propio stack, manejas herramientas con soltura, los cambios mejor si son predecibles.



**El primer "planeta"**

Puede que te pase como a mi y vengas de crear webs con PHP: base de datos, estructura de entidades, controladores, plugins.

Tienes preguntas clave.

Si este es tu caso (también si no lo es), [Directus](https://directus.io/) puede ser tu primer "planeta" en el Jamstack.



Es un Headless CMS de código abierto basado en PHP, MySQL y JavaScript.

Tiene todo lo que puedes esperar de un gestor de contenidos excepto una cosa: plantillas.

El contenido no se muestra a través de su sistema (salvo en la administración). Se lanza a una API (Rest y GraphQL) para que lo consuma otro sistema.



**Varias versiones y SDK**

Este backend ha evolucionado en su versión 8 para ofrecer por separado tres soluciones:

- API, para dotar a tu base de datos de un acceso externo.
- App, un panel de control para administrar datos y estructura.
- Suite, la combinación de las dos anteriores. 



La experiencia del panel de control es muy similar a la que has visto en otros gestores: tipos de campos diferentes, filtros, permisos de usuario, gestión de archivos multimedia.

Otro aporte positivo es que cuenta con librerías (SDK o clientes) en varios lenguajes (Node Ruby, Python, Android...) para consumir los datos ofrecidos por la API.



Además del código también tienes una versión en la [nube](https://directus.io/services.html) de pago por suscripción, aunque el precio no es muy asequible.

La documentación es correcta y te ayudará a entender como funciona la API.

[El trabajo en el repositorio](https://github.com/directus) es intenso y constante, aunque algunas *issues* abiertas por la comunidad llevan mucho tiempo sin ser resueltas.



Instala y prueba. No es el *headless* más famoso ni popular ni rápido, pero quizás tus preguntas queden respondidas pronto.


## Imperdibles


### Construye tu propio generador de sitios estáticos (SSG)

¿Cómo puedes estar así de loco?

No me lo digas a mi, cuéntaselo a Bryan Robinson, que se ha despachado en SmasingMagazine animándonos a construir soluciones a medida para este menester.

Lo cuenta de forma muy atractiva.

- Primero tu plantilla estática en HMTL y CSS
- Luego le añades propiedades dinámicas con [handlebars](https://handlebarsjs.com/) o [nunjucks](https://mozilla.github.io/nunjucks/)
- Capturas los contenidos de un Headless como Sanity
- Mezclas todo para que te funcione y despliegas en Netlify

El resultado tendrá una muy buena moraleja: nadie te quitará todo lo que vas a aprender.

Pero, con la cantidad de opciones que tenemos, quizás sea buscarle tres pies al gato.

➡️ [Simplify Your Stack With A Custom-Made Static Site Generator](https://www.smashingmagazine.com/2020/09/stack-custom-made-static-site-generator/)



### Cómo elegir un Headless CMS "self-hosted"

Hay muchas opciones de Headless CMS siguiendo el modelo SaaS.

Pero también gran cantidad si buscamos herramientas que podamos instalar por nuestra cuenta.

Un caso es el de Directus, claro, pero hay bastantes más: Strapi, Cockpit, Grav...

En este artículo de Bejamas, compañía referente en el sector del Jamstack, se repasan unos cuantos de ellos con ventajas e inconvenientes.

También aparecen opciones como Ghost o WordPress, que pueden sentir que estés más cercano de la tecnología que se usa en el Jamstack.

➡️ [Self-Hosted CMSs in Jamstack](https://bejamas.io/blog/self-hosted-cms/)



## Píldoras CocoStack


**[Hosting para WordPress Headless](https://www.treaclewp.com/)**

*#hosting* *#wordpress*

Un proveedor de hosting que se centra en ofrecer lo mejor de WordPress en su versión "sin cabeza" para sacar mejor provecho de la API.

**[Jamstack Conf en Octubre](https://jamstackconf.com/virtual/)**

*#event* *#jamstack*

El próximo 3 de Octubre se celebra otra Jamstack Conf virtual con una serie de charlas gratuitas y talleres de pago. Siempre se descubre algún caso real interesante.

**[Statiq, generador de sitios estáticos en .NET](https://statiq.dev/web/)**

*#dotnet* *#ssg*

Quién dijera que el Jamstack es solo JavaScript estaba muy confundido: Statiq usa la tecnología .NET Core para renderizar páginas estáticas.

**[Halfmoon, dark mode framework](https://www.gethalfmoon.com/)**

*#css* *#framework*

Un framework para construir estilos directamente en dark mode. Está en la versión 1.1 y tiene multitud de componentes ya diseñados.


¡Nos leemos en el próximo número!



[Dani](https://www.danielprimo.io/now)



`#CocoStack7 #CocoStack`