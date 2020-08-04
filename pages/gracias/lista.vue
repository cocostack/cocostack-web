<template>
  <div class="flex flex-col justify-center m-auto">
    <div
      class="flex md:flex-row flex-col bg-gray-900 justify-center md:text-left text-center"
    >
      <div
        class="ml-5 p-10 flex flex-col justify-center max-w-2xl rounded bg-gray-900"
      >
        <div class="text-3xl font-bold text-gray-200">
          ¡Bienvenido/a a CocoStack!
        </div>
        <div class="md:text-3xl text-xl  text-teal-200">
          Solo quedan tres sencillos pasos para que todo salga bien.
        </div>
      </div>
    </div>
    <div
      class="flex md:flex-row flex-col bg-teal-200 justify-center md:text-left text-center"
    >
      <div class="flex flex-col justify-center items-center relative">
        <div class="w-56 h-12 md:flex hidden justify-center">
          <div class="h-full border-teal-300 border-dashed"></div>
        </div>
        <div
          class="rounded-full w-12 h-12 text-xl text-teal-100 bg-teal-700 font-black flex justify-center items-center absolute top-0 right-0 mt-16 shadow-lg mr-2"
        >
          1
        </div>
        <img
          alt="step1"
          class="w-56 h-56 rounded-full shadow my-5 object-scale-down"
          src="https://image.flaticon.com/icons/svg/1330/1330216.svg"
        />
        <div class="w-56 h-12 md:flex hidden justify-center">
          <div class="h-full border-r-4 border-teal-300 border-dashed"></div>
        </div>
      </div>
      <div
        class="ml-5 p-10 flex flex-col justify-center max-w-2xl rounded bg-teal-200"
      >
        <div class="text-xs uppercase font-bold text-teal-500">
          Comprueba tu email
        </div>
        <div class="md:text-3xl text-xl font-bold text-teal-700">
          Tendrás un correo electrónico mío
        </div>
        <div class="mt-4 text-teal-800">
          Si no lo encuentras tal vez esté en la carpeta de promociones o notificaciones. Si ha habido muy mala pata, estará en spam. <br/>
          Funciona con cualquier correo electrónico, pero si eres de Gmail o Hotmail aquí tienes un enlace directo.
        </div>
        <a target="_blank" class="block mx-auto my-2 shadow bg-red-800 hover:bg-red-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded" href="https://accounts.google.com/ServiceLogin/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=AddSession">Ir a Gmail para confirmar la suscripción</a>
        <a target="_blank" class="block mx-auto my-2 shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded" href="https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1515432288&rver=6.7.6640.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fauthRedirect%3dtrue%26RpsCsrfState%3dc7e7df42-2b76-1fea-435a-fce96b8b24e3&id=292841&whr=hotmail.com&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015">Ir a Hotmail (Outlook) para confirmar la suscripción</a>

      </div>
    </div>
    <div
      class="flex md:flex-row flex-col bg-orange-200 justify-center md:text-left text-center"
    >
      <div class="flex flex-col justify-center items-center relative">
        <div class="w-56 h-12 md:flex hidden justify-center">
          <div class="h-full border-r-4 border-orange-300 border-dashed"></div>
        </div>
        <div
          class="rounded-full w-12 h-12 text-xl text-orange-100 bg-orange-700 font-black flex justify-center items-center absolute top-0 right-0 mt-16 shadow-lg mr-2"
        >
          2
        </div>
        <img
          alt="step2"
          class="w-56 h-56 rounded-full shadow my-5 object-scale-down"
          src="https://image.flaticon.com/icons/svg/1330/1330216.svg"
        />
        <div class="w-56 h-12 md:flex hidden justify-center">
          <div class="h-full border-r-4 border-orange-300 border-dashed"></div>
        </div>
      </div>
      <div
        class="ml-5 p-10 flex flex-col justify-center max-w-2xl rounded bg-orange-200"
      >
        <div class="text-xs uppercase font-bold text-orange-500">
          Haz click en el botón naranja.
        </div>
        <div class="md:text-3xl text-xl font-bold text-orange-700">
          El asunto del mensaje es "Please confirm your subscription"
        </div>
        <div class="mt-4 text-orange-800">
          Pulsa el botón naranja que dice "Confirm!" 
          <br/>
          Está en inglés pero yo te voy a escribir siempre en castellano.
        </div>
      </div>
    </div>
    <div
      class="flex md:flex-row flex-col bg-indigo-200 justify-center md:text-left text-center"
    >
      <div class="flex flex-col justify-center items-center relative">
        <div class="w-56 h-12 md:flex hidden justify-center">
          <div class="h-full border-r-4 border-indigo-300 border-dashed"></div>
        </div>
        <div
          class="rounded-full w-12 h-12 text-xl text-indigo-100 bg-indigo-700 font-black flex justify-center items-center absolute top-0 right-0 mt-16 shadow-lg mr-2"
        >
          3
        </div>
        <img
          alt="step3"
          class="w-56 h-56 rounded-full shadow my-5 object-scale-down"
          src="https://image.flaticon.com/icons/svg/1330/1330216.svg"
        />
        <div class="w-56 h-12 md:flex hidden justify-center">
          <div class="h-full border-r-4 border-indigo-300 border-dashed"></div>
        </div>
      </div> 
      <div
        class="ml-5 p-10 flex flex-col justify-center max-w-2xl rounded bg-indigo-200"
      >
        <div class="text-xs uppercase font-bold text-indigo-500">
          Último paso
        </div>
        <div class="md:text-3xl text-xl font-bold text-indigo-700">
          Añadir a la lista de contactos
        </div>
        <div class="mt-4 text-indigo-800">
          Si quieres seguir recibiendo mis emails de forma segura lo mejor es que añadas mi dirección a tu lista de contactos.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: '¡Gracias!',
  },
}
</script>
