<template>
  <div class="container mx-auto pt-28">
    <article>
      <nuxt-content :document="article" />
    </article>
  </div>
</template>

<script>
import getSiteMeta from '~/utils/getSiteMeta'

export default {
  name: 'Resume',
  async asyncData ({ $content }) {
    const article = await $content('resume', { text: true }).fetch()
    return { article }
  },
  head () {
    return {
      title: 'Resume - Wildan Hafidz',
      meta: [
        ...this.meta
      ]
    }
  },
  computed: {
    meta () {
      const metaData = {
        type: 'article',
        title: 'Resume - Wildan Hafidz',
        description: this.article.description
      }
      return getSiteMeta(metaData)
    }
  }
}
</script>

<style scoped>
</style>
