---
title: "A Matt Mullenweg (WordPress) no le gusta el Jamstack #5"
slug: 5-a-matt-mullenweg-wordpress-no-le-gusta-el-jamstack
date: "2020-09-09T16:12:24+00:00"
---
    

Matt es el fundador de WordPress y CEO de Automattic, la empresa que está detrás de este gigante de la web.

Hace un par de semanas Richard MacManus escribía en [The New Stack](https://thenewstack.io/wordpress-co-founder-matt-mullenweg-is-not-a-fan-of-jamstack/) sobre un email que había recibido de Matt sobre el Jamstack.

No era bueno, no.

*"Jamstack es un paso atrás para las personas que deciden adoptarlo".*

*"La usabilidad y la funcionalidad son menores [que en los CMS tradicionales]".*

*"Cuanto más grande se vuelve su sitio, más lento es reconstruir o actualizar plantillas".*



Matt ya respondió a preguntas sobre este tema en las ediciones online de la WordCamp España y en la WordCamp Europe y me hice eco de ello en [WRP 80. Lo que Matt ha dicho de tu futuro como desarrollador web](https://premium.danielprimo.io/podcast/premium/lo-que-matt-ha-dicho-futuro-desarrollador-web).



Con esta misiva el padre de WP ha puesto en el punto de mira al Jamstack.

Acierta cuando dice que es una "cadena frágil". 

Con esta metodología de desarrollo tienes que controlar varios proveedores para conseguir todas las *features* que exija el proyecto. 

Con WordPress muchas de ellas van se de serie.

Claro, si es sencillo también necesitas menos recursos, con lo que el proceso se acorta y se abarata.



Otra de las preocupaciones de Matt es la lentitud en la generación de los sitios grandes con las herramientas del Jamstack.

Este tema apareció en el [envío anterior](https://cocostack.com/newsletter/4-lo-bueno-y-malo-que-esta-pasando-en-gatsby) con Gatsby y tiene mucho de cierto. Es tan nuevo que no ha llegado a dar soluciones a problemas tan complejos.

Pero la principal preocupación en WordPress con proyectos grandes es la velocidad de carga y la capacidad del servidor.



**¿Quién resuelve mejor estos problemas?**

El Jamstack no está maduro, sigue germinando y cambiando. Es probable que en conjunto tenga una peor nota que un  longevo WordPress.

La experiencia del desarrollador, en cambio, sube puntos. Una vez pasas la [barrera](http://www.vikingcodeschool.com/posts/why-learning-to-code-is-so-damn-hard) de la confianza y la competencia, estarás más cómodo.

Las piezas comienzan a encajar en tu cabeza.



Además tiene un componente adictivo. 

Difícil de convertir en un argumento de venta, pero si en un argumento vital.

Te sientes más cercano a la tecnología porque tienes que tomar más decisiones, hay una recompensa mayor cuando el buscador funciona o el formulario valida y envía el correo.



Las compañías como Netlify o Vercel quieren ocupar los huecos que competidores como WordPress tienen más difícil rellenar. 

La discusión va a seguir abierta mucho tiempo. 

La veremos, con unas palomitas, en CocoStack.



## Imperdibles


### Las partes no visibles del Jamstack

Este artículo se centra en contar como Vincent Voyer resuelve tres problemas que surgen de la filosofía que está detrás del Jamstack.

Gestión de bases de datos, de trabajos de cron y *background jobs*.

Una metodología tradicional nos dota de estas opciones en el servidor. Con el CocoStack hay que tomar más decisiones.

Para resolverlo cuenta cómo utiliza AWS Cloud Development Kit.

La base de datos PostgreSQL con RDS, el cron con EventBridge y los mensajes con SNS.

Completa con la forma de desplegar e incluso el coste de lo que tiene montado. 


➡️ [Coding the Jamstack missing parts: databases, crons & background jobs](https://dev.to/vvo/coding-the-jamstack-missing-parts-databases-crons-background-jobs-1bpj)



### De Drupal 7 a Sanity

Me he sentido especialmente identificado con este artículo.

Está escrito para profesionales que, como yo, han hecho gran parte de su recorrido en poderosos CMS como Drupal.

Sanity es un *Headless CMS* de pago que trata de hacerse hueco y dirige aquí su impacto a los drupaleros.

La migración de Drupal 7 a la versión 8/9 es dura, es un desarrollo nuevo.

Así que surge la pregunta: "¿merece la pena?"

Quizás no sea el momento en muchos equipos de plantear un salto tan grande, pero al menos queda el gusto de ver como comparar ambos mundos para saber lo que se hace ahí fuera.

➡️ [The Drupal developer’s introduction to Sanity.io](https://www.sanity.io/blog/sanity-vs-drupal7)



## Píldoras CocoStack


**[eleventy-high-performance-blog](https://github.com/google/eleventy-high-performance-blog)**

*#code* *#eleventy*

Puntuación 100 en todos los parámetros de Google Lighthouse. Eso es lo que promete este _starter_ para Eleventy. Minimalismo al servicio del rendimiento máximo.

**[¿Por qué Gatsby amenaza a WordPress?](https://www.kuworking.com/blog/gatsby-porque-gatsby-amenaza-wordpress)**

*#gatsby* *#spanish*

La rivalidad entre ambos sistemas da lugar a artículos como el de kuworking donde se trata de ver sus diferencias y las virtudes de cada sistema.

**[Remotely Interesting](https://remotelyinteresting.transistor.fm/)**

*#netlify* *#podcast*

Netlify también apuesta por el podcasting y aquí ya tiene unos cuantos episodios rondando los temas que más interesan en el Jamstack (y como usar Netlify, claro).

**[Frontman, un SSG para Ruby](https://github.com/algolia/frontman)**

*#ruby* *#ssg*

Si Algolia crea un generador de sitios estáticos (SSG) es porque lo usaran en sus despliegues. Eso es muy buena noticia. Se basa en Middleman y está todavía en fase alpha.

**[Stackbit Studio: "ahora cualquiera puede hacer una web"](https://www.stackbit.com/blog/announcing-stackbit-studio/)**

*#free* *#saas*

Stackbit es una plataforma nocode para que cualquiera pueda crear una web completa con la filosofía Jamstack. Han ido evolucionando su herramienta hasta hacerla estable y disponer de muchas plantillas para elegir.

¡Nos leemos en el próximo número!



[Dani](https://www.danielprimo.io/now)



`#CocoStack5 #CocoStack`