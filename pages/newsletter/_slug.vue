<template>
  <div>
    <header class="flex justify-center px-4 text-gray-100 bg-gray-800">
      <div class="container py-6">
        <h3 class="text-center text-lg font-bold lg:text-2xl">
          CocoStack
        </h3>
        <p class="text-center text-lg">
          El primer newsletter sobre Jamstack, HeadlessCMS y Static Site Generators en castellano.
        </p>
        <div class="w-full border-b flex flex-row flex-wrap items-center justify-center p-1">
          <NewsletterBar></NewsletterBar>
        </div>
      </div>
    </header>

    <div class="w-full md:w-2/5 mx-auto mt-4">
      <h1 class="my-8 max-w-full m-auto text-3xl text-center font-medium">
        {{ newsletter.title }}
      </h1>
      <nuxt-content :document="newsletter" class="leading-loose markdown" />
    </div>

    <footer class="flex justify-center px-4 text-gray-100 bg-gray-800">
      <div class="container py-6">
        <div class="w-full border-b flex flex-row flex-wrap items-center justify-center p-1">
          <NewsletterBar></NewsletterBar>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import NewsletterBar from '../../components/NewsletterBar'

export default {
  components: {
    NewsletterBar,
  },
  head() {
    return {
      title: this.newsletter.title,
    }
  },
  async asyncData({ $content, params, error }) {
    const newsletter = await $content(`newsletter/${params.slug}`).fetch()
      .catch(err => {
        error({ statusCode: 404, message: "Página no encontrada" });
      });

    return {
      newsletter,
    }
  },
}
</script>
