<template>
  <div class="container mx-auto pt-28">
    <h1 class="text-4xl font-bold tracking-tight mb-4">
      Articles
    </h1>

    <p class="text-lg text-gray-600 leading-relaxed mb-10">
      My writings, thoughts, and personal journey on technology, design, and digital product development. I share insights from my experiences building products, collaborating with teams, and navigating the ever-evolving tech landscape.
    </p>

    <div class="space-y-8">
      <article
        v-for="post in posts"
        :key="post.slug"
        class="flex flex-col md:flex-row md:items-stretch rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
      >
        <div class="md:w-2/3 w-full p-6 flex flex-col">
          <div class="text-sm text-gray-500 mb-2">
            {{ post.date }} • {{ post.readTime }}
          </div>

          <!-- 🔥 gunakan named route seperti di projects -->
          <nuxt-link :to="{ name: 'articles-slug', params: { slug: post.slug } }">
            <h2 class="text-2xl font-semibold mb-2 hover:underline">
              {{ post.title }}
            </h2>
          </nuxt-link>

          <p class="text-gray-600 mb-4 line-clamp-3">
            {{ post.excerpt }}
          </p>

          <div class="mt-auto">
            <nuxt-link
              :to="{ name: 'articles-slug', params: { slug: post.slug } }"
              class="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
            >
              Read more
              <span class="ml-1">→</span>
            </nuxt-link>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticlesPage',
  data () {
    return {
      posts: [
        {
          slug: 'quiet-growth',
          title: 'Quiet Growth: Learning to Trust the Process',
          excerpt:
            'Behind every milestone, there are countless unseen nights of doubt, experimentation, and persistence.',
          date: 'September 2025',
          readTime: '4 min read'
        },
        {
          slug: 'kita-akan-mudah-tergantikan',
          title: 'Kita Akan Mudah Tergantikan',
          excerpt:
            'Refleksi tentang kenyataan bahwa dalam dunia yang cepat berubah, kita bisa dengan mudah tergantikan dan bagaimana kesadaran itu seharusnya mendorong kita untuk terus berkembang.',
          date: 'Juni 2025',
          readTime: '4 min read'
        },
        {
          slug: 'empati-adalah-kemampuan-menjadi-orang-lain',
          title: 'Empati adalah Kemampuan Menjadi Orang Lain',
          excerpt:
            'Refleksi tentang empati—lebih dari sekadar perasaan, tetapi kemampuan masuk ke dunia orang lain, memahami cerita mereka, dan merespons dengan ketulusan.',
          date: 'July 2024',
          readTime: '4 min read'
        },
        {
          slug: 'fair-from-the-mind',
          title: 'Fair from the Mind',
          excerpt:
            'A reflection on how fairness starts long before action — in the way we think, evaluate situations, and internalize our values.',
          date: 'May 2024',
          readTime: '4 min read'
        },
        {
          slug: 'critical-thinking-problem-solving',
          title: 'Critical Thinking & Problem Solving',
          excerpt:
            'How critical thinking strengthens problem-solving by helping us ask better questions, challenge assumptions, and navigate complexity with clarity.',
          date: 'May 2024',
          readTime: '5 min read'
        },
        {
          slug: '5-ways-of-adaptability',
          title: '5 Ways of Adaptability',
          excerpt:
            'A guide to the five essential dimensions of adaptability—how we interact, achieve, learn, work, and think in a constantly changing world.',
          date: 'May 2024',
          readTime: '4 min read'
        },
        {
          slug: 'action-on-google-introduction',
          title: 'Action on Google Introduction',
          excerpt:
            'An introductory overview of Action on Google—what it is, how it works with Google Assistant, and how Dialogflow helps you build conversational experiences.',
          date: 'May 2024',
          readTime: '3 min read'
        },
      ]
    }
  }
}
</script>
