<template>
  <div class="flex justify-center mt-6">
    <form
      method="post"
      action="https://sendfox.com/form/1xgdyn/10rzng"
      id="10rzng"
      data-async="true"
    >
      <div class="bg-white rounded-lg">
        <div class="flex flex-wrap justify-between md:flex-row">
          <input
            type="email"
            class="m-1 p-2 appearance-none text-gray-700 text-sm focus:outline-none"
            placeholder="Tu email"
            name="email"
            required
          />
          <button
            type="submit"
            class="w-full m-1 p-2 text-sm bg-gray-800 rounded-lg font-semibold uppercase lg:w-auto"
          >
            ¡Quiero suscribirme!
          </button>
        </div>
      </div>

      <div style="position: absolute; left: -5000px;" aria-hidden="true">
        <input
          type="text"
          name="a_password"
          tabindex="-1"
          value=""
          autocomplete="off"
        />
      </div>
      <div class="flex flex-col pt-4">
        <label class="flex justify-start items-start py-1 text-sm"
          ><input
            type="checkbox"
            name="gdpr"
            value="1"
            required
            class="h-3 w-3 mr-1 mt-1"
          />
          He leído y acepto la&nbsp;<a
            href="/privacidad"
            target="_blank"
            class="underline"
            >política de privacidad</a
          >.</label
        >
      </div>
    </form>
  </div>
</template>
