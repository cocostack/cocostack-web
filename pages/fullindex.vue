<template>
  <div class="m-auto">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-12">
        <h1 class="sm:text-3xl text-4xl font-medium title-font mb-4 text-white">
          CocoStack
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          El primer newsletter sobre Jamstack, HeadlessCMS y Static Sites en
          castellano.
        </p>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          ¡Muy pronto lanzamos!
        </p>
      </div>
      <form
        method="post"
        action="https://sendfox.com/form/1xgdyn/10rzng"
        class="sendfox-form"
        id="10rzng"
        data-async="true"
      >
        <div class="flex lg:w-2/3 w-full  flex-col mx-auto px-8 sm:px-0">
          <p><input type="email" placeholder="Tu email" name="email" required class="flex-grow w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-blue-500 text-base px-4 py-2 mr-4 mb-4 sm:mb-0"/></p>
        <p>
          <label class="flex justify-start items-start py-8"
            ><input type="checkbox" name="gdpr" value="1" required class="h-6 w-6 mr-3" /> He leído y acepto la&nbsp;<a href="/privacidad" class="underline">política de privacidad</a>.</label
          >
        </p>
        <!-- no botz please -->
        <div style="position: absolute; left: -5000px;" aria-hidden="true">
          <input
            type="text"
            name="a_password"
            tabindex="-1"
            value=""
            autocomplete="off"
          />
        </div>
        <p><button type="submit" class="text-white bg-blue-500 border-0 w-full my-4  py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Suscribir</button></p>
        </div>
      </form>
      <script src="https://sendfox.com/js/form.js"></script>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Cocostack',
  },
  layout: 'full',
}
</script>
