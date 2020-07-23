<template>
  <div>
      <h1
        class="my-8 max-w-full m-auto text-3xl text-center font-medium"
      >
        {{ newsletter.title }}
      </h1>
      <nuxt-content :document="newsletter" class="leading-loose" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {

    const newsletter = await $content(`newsletter/${params.slug}`)
      .fetch()
    //   .catch(err => {
    //     error({ statusCode: 404, message: "Página no encontrada" });
    //   });

    return {
      newsletter
    };
  }
};
</script>
