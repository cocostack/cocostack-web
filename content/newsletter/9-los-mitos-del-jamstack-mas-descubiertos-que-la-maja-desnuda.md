---
title: "Los mitos del Jamstack más descubiertos que La maja desnuda #9"
slug: 9-los-mitos-del-jamstack-mas-descubiertos-que-la-maja-desnuda
date: "2020-10-22T14:47:10+00:00"
---
Hay una colección de mitos sobre el Jamstack muy potente.

Los bulos, ya se sabe, corren como la pólvora.

Desbaratarlos así, en frío, es algo que me gustaría ver hacer a Goya, seguro que le costaba menos que vestir a La maja.

Vamos a intentarlo.

**Jamstack es solo para JavaScript**

Cuando Matt de Netlify acuñó el término JAMstack lo hizo con las tres primeras letras en mayúsculas: JavaScript, API y Markup.

Ahora se escribe "Jamstack" para eliminar esa idea y crear otra de arquitectura.

Para ver la pluralidad de lenguajes en la parte de los generadores de sitios estáticos (SSG) y en la de los datos (Headless) basta con ir ["Site generators"](https://jamstack.org/generators/) y ["Headless"](https://jamstack.org/headless-cms/) respectivamente.



Este era el más fácil, ahora a sudar un poquito...



**Jamstack solo lo usan developers para poner un portfolio**

Añadiría algo más al mito: Un blog que solo se actualiza cuando se crea la web.

Si bien es cierto que no hablamos de un ecosistema maduro, si hay grandes ejemplos de webs hechas con tecnología Jamstack.

Ahí te lanzo algunas listas imperdibles: [Netlify](https://www.netlify.com/topics/case-studies/), [Bejamas](https://bejamas.io/blog/case-studies/), [Nuxt](https://vuetelemetry.com/explore?framework.slug=nuxtjs&_sort=lastDetectedAt%3Adesc), [Gatsby](https://www.gatsbyjs.com/showcase/).

Otra cosa es la letra pequeña que trato de hacer más grande en CocoStack con los detalles reales de los casos de estudio. 



**En Jamstack no se puede hacer nada que no sea estático**

Es uno de los mitos más extendidos y un arma contra esta arquitectura.

Tienen razón en que hay que cambiar el chip para ver que los sitios estáticos dejan de serlo cuando se enganchan con la parte dinámica.

Si llegas desde el monolito es complicado verle ventajas, prefiero presentarlo como un reto.

En [awesome-static-website-services](https://github.com/agarrharr/awesome-static-website-services) y [the New Dynamic](https://www.tnd.dev/) encontrarás bases de datos, búsquedas, *cron tasks*, autenticación...



**Para usar el Jamstack hay que ser programador**

Es una media verdad si hablamos de la totalidad de la arquitectura. 

Como cualquier sistema de desarrollo que acaba de arrancar, es un poco más complejo que otros que llevan más tiempo funcionando o están pensados para un público diferente.

Ser developer te va a ayudar mucho, muchísimo, si quieres desarrollar con partes de este ecosistema.

Pero hay proyectos *nocode* que están creciendo. El principal es [StackBit](https://www.stackbit.com/) que ya no está en beta. Un clic y tu sitio listo. También [DraftBox](https://draftbox.co/) apunta maneras. 



**No se pueden subir ficheros por FTP**

Es, para mi, el punto más ilustrativo entre el desarrollo tradicional basado en CMS y lo relacionado con el *cloud*.

Si puedes alojar tu web Jamstack en un VPS de los de siempre. Recuerda que, una vez generada con un SSG, los ficheros deberían poder ejecutarse en un servidor muy sencillo. Nada de PHP, MySQL, Ruby...

Pero hay vida más allá. 

¿Y si pudiera replicarse tu web sola para estar disponible en nodos de la nube más cercanos al usuario? ¿O hacer despliegues controlados ejecutando tests previos? ¿O relacionar tu código con un repositorio de Git?

El FTP está bien, pero estas cosas te hacen ser otro.



**Jamstack es solo un cuento para vendernos cosas diferentes**

Realmente esta no es un mito. 

Ponerle nombre a algo hace que puedas identificarte con ello y, por tanto, pertenecer a un ente, a una forma de hacer las cosas.

Es un producto en el que te diferencias de la competencia ofreciendo características que otros no pueden conseguir.

¿No es eso lo que intentamos hacer para que nos contraten?

Quién dice que en un año cambie de nombre y empiece a llamarse CocoStack… 


## Imperdibles


### Serverless también puede ser algo sencillo

Una de las atracciones de todo el desarrollo en la nube es precisamente el uso del Serverless.

Se trata de conseguir que un servidor ejecute aquello que le pedimos, pro supuesto, pero solo a demanda. 

En el momento en el que solicitemos la acción (un envío de email, una consulta a base de datos, generar un token) el servidor arranca. Al terminar, se apaga.

En este artículo cuentan como crear tu primera *churriAPI* con Vercel y un poco de nodejs.

Hacer no hace mucho, pero seguro aprendes a hacer un despliegue en uno de los competidores de DigitalOcean.

➡️ [Build a Serverless API in seconds on Vercel with Node.Js](https://lucas-le-ray.com/blog/build-serverless-api-vercel-nodejs)




### Sobre los premios *Jammies*

Recientemente se han entregado los premios *Jammies* a los mejores proyectos basados en nuestro querido ecosistema. Por supuesto son cosa de Netlify.

En la lista hay proyectos muy interesantes, e incipientes, como un gestor de finanzas personal desarrollado por Jennifer Yip: [Lunch Money](https://lunchmoney.app/).

También la multinacional Unilever juega en esto con [Nexxxus](https://nexxus-website-us.netlify.app/us/en/), donde muestra en una página ultra-rápida todo el poder de Gridsome (SSG) y Sanity (Headless).

Lo que uno ve cuando repasa la lista es que parecen unos galardones familiares, muy alejados de alfombras rojas.

Quizás en futuras ediciones todos hablemos de ellos, pero a mi se me han quedado un poco cortos.

➡️ [Announcing the Jammies awards winners](https://www.netlify.com/blog/2020/10/06/announcing-the-jammies-awards-winners/)



## Píldoras CocoStack


**[Crea un sitio Jamstack con un clic](https://jamstack.new/info/)**

*#free* *#hosting* *#nocode*

Stackbit ha creado unos enlaces rápidos para crear sitios basados en Jamstack sobre arquetipos conocidos: portfolio, blog, corporativa... Todo en un clic.

**[Generador de perfiles para Github](https://github.com/rahuldkjain/github-profile-readme-generator)**

*#gatsby* *#opensource*

Desde hace algún timpo Github permite crear una presentación para tu cuenta basada en un repositorio. El típico `Readme` se puede convertir en un sitio web completo con esta herramienta.

**[Crea un ecommerce de comida online en 7 pasos](https://strapi.io/blog/nextjs-react-hooks-strapi-food-app-1)**

*#nextjs* *#strapi* *#tutorial*

Una saga en 7 artículos utilizando Strapi como Headless, Next.js con React Hooks en el front y Stripe para procesar los pagos. ¡Olé!

**[Stamatic, generador de sitios estáticos en PHP](https://statamic.com/)**

*#php* *#ssg*

No es un script de PHP de código abierto, pero tiene una puesta en escena que ha mejorado mucho en los últimos tiempos. Tienen una comparación con WordPress con una presesentación que hace marca.

**[Los vídeos de la Jamstack Conf](https://www.youtube.com/playlist?list=PL58Wk5g77lF94tg-F3y5zRyDeLVhTDnTg)**

*#jamstack* *#videos*

Pues eso, todos los vídeos del evento. Bueno, casi, no veo el del debate entre los dos Matts del que ya [hablamos](https://cocostack.com/newsletter/8-el-e-commerce-es-el-nuevo-campo-de-batalla).

**[DigitalOcean App Platform](https://www.digitalocean.com/products/app-platform/)**

*#cloud* *#hosting*

DigitalOcean no quiere quedarse fuera del pastel del hosting y servicios para el ecosistema Jamstack. Incluye un plan gratuito limitado, pero buena puerta de entrada para probarlo.

**[Que tu web no se quede sin olas en SVG](https://svgwave.in/)**

*#free* *#graphics*

Un generador de olas y ondas en formato SVG. Ideal para fondos y efectos dinámicos para cualquier web modernita que se precie.

¡Nos leemos en el próximo número!



[Dani](https://www.danielprimo.io/now)



`#CocoStack9 #CocoStack`