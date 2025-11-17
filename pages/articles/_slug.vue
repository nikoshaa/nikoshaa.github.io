<template>
  <div class="container mx-auto pt-28">
    <nuxt-link
      to="/articles"
      class="inline-flex items-center text-sm text-gray-500 hover:text-gray-800 mb-6"
    >
      ← Back to Articles
    </nuxt-link>

    <h1 class="text-4xl font-bold tracking-tight mb-4">
      {{ article.title }}
    </h1>

    <p v-if="article.description" class="text-lg text-gray-600 mb-6">
      {{ article.description }}
    </p>

    <p class="text-sm text-gray-500 mb-8">
      {{ article.date }} · {{ article.readTime }}
    </p>

    <nuxt-content :document="article" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params, error }) {
    try {
      const article = await $content('articles', params.slug).fetch()
      return { article }
    } catch (e) {
      error({ statusCode: 404, message: 'Article not found' })
    }
  }
}
</script>
