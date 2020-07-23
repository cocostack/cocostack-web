<template>
  <div>
    <h1 class="text-3xl py-6">Test</h1>
    <ul class="list-disc list-inside mb-4">
      <li v-for="(post, index) in newsletters" :key="index">
        <nuxt-link :to="post.path" class="underline">{{ post.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) { 
    const newsletters = await $content("newsletter")
      .only(["title", "path"])
      .limit(5)
      .sortBy('title')
      .where({
        published: true
      })
      .fetch()

    return {
      newsletters
    };
  }
};
</script>