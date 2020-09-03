<template>
  <div class="w-full flex flex-wrap">
    <!-- Login Section -->
    <div class="w-full md:w-1/2 flex flex-col">

      <div
        class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32"
      >
        <p class="text-center text-4xl font-bold">CocoStack</p>
        <p class="text-center text-xl leading-relaxed">
          El primer newsletter sobre Jamstack, HeadlessCMS y Static Site
          Generators en castellano.
        </p>
        <p class="text-center text-md leading-relaxed mt-2">
          Consulta el <a class="underline" href="/newsletter/4-lo-bueno-y-malo-que-esta-pasando-en-gatsby">último envío</a>.
        </p>
        <form
          class="flex flex-col pt-3 md:pt-4 sendfox-form"
          method="post"
          action="https://sendfox.com/form/1xgdyn/10rzng"
          id="10rzng"
          data-async="true"
        >
          <div class="flex flex-col pt-4">
            <input
              type="email"
              placeholder="Tu email"
              name="email"
              required
              class="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-900 mt-1 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div class="flex flex-col pt-4">
            <label class="flex justify-start items-start py-8"
              ><input
                type="checkbox"
                name="gdpr"
                value="1"
                required
                class="h-6 w-6 mr-3"
              />
              He leído y acepto la&nbsp;<a href="/privacidad" target="_blank" class="underline"
                >política de privacidad</a
              >.</label
            >
          </div>

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
          <input
            type="submit"
            value="¡Quiero suscribirme!"
            class="text-white bg-blue-900 border-0 w-full focus:outline-none hover:bg-blue-600 rounded text-lg p-2 mt-8"
          />
        </form>
      </div>
    </div>

    <!-- Image Section -->
    <div class="w-1/2 shadow-2xl">
      <img
        class="object-cover w-full h-screen hidden md:block"
        src="~/assets/images/coco-1.jpg"
      />
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'CocoStack',
  },
  layout: 'full-subscription',
}
</script>
