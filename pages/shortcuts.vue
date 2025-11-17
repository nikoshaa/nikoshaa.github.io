<template>
  <div class="container mx-auto pt-28">

    <!-- Page Title -->
    <h1 class="text-4xl font-bold tracking-tight mb-4">
      My Shortcuts Collection
    </h1>

    <!-- Page Description -->
    <p class="text-lg text-gray-600 leading-relaxed mb-10">
      This collection showcases the iPhone Shortcuts I’ve crafted to automate tasks,
      streamline routines, and spark creativity.
    </p>

    <!-- Shortcuts Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      <!-- Shortcut Card -->
      <div
        v-for="item in shortcuts"
        :key="item.title"
        class="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
      >
        <!-- Title -->
        <h3 class="text-xl font-semibold text-gray-800 mb-2">
          {{ item.title }}
        </h3>

        <!-- Description -->
        <p class="text-gray-600 text-sm mb-4">
          {{ item.description }}
        </p>

        <!-- Footer -->
        <div class="flex justify-between items-center">
          <span class="text-sm font-medium text-gray-500">
            v{{ item.version }}
          </span>

          <a
            :href="item.link"
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-600 font-medium hover:underline"
          >
            Get Shortcut
          </a>
        </div>
      </div>

    </div>

  </div>
</template>

<script setup>
const shortcuts = [
  {
    title: "Find My Device 1.0",
    description:
      "Open the Find My app directly by saying, 'Hey Siri, find my device'",
    version: "1.0",
    link: "https://www.icloud.com/shortcuts/7e387cda938a45299186467d0d6ba2ba"
  },
  {
    title: "Fix Grammar 1.0",
    description:
      "Instantly improves grammar using ChatGPT and copies the corrected text to your clipboard",
    version: "1.0",
    link: "https://www.icloud.com/shortcuts/c91d5a60fc524863ac122fdcd853a6c7"
  },
  {
    title: "Quick EN-ID Translate 1.0",
    description:
      "Quickly translate between English and Indonesian based on the input language",
    version: "1.0",
    link: "https://www.icloud.com/shortcuts/962bdb69897a475da169f048de3e9dee"
  },
  {
    title: "Routine Travel Mode 1.0",
    description:
      "Track your daily trips and send travel details simply by saying 'Hey Siri, Routine Travel Mode'",
    version: "1.0",
    link: "https://www.icloud.com/shortcuts/93d201c0202643759ac7dc13bb6d44dd"
  },
  {
    title: "Talk with AI 1.0",
    description:
      "Start a chat with AI using only your voice. Say 'Hey Siri, talk with AI'",
    version: "1.0",
    link: "https://www.icloud.com/shortcuts/85c54c366e964657a0c6af5a2a00af3c"
  }
];
</script>

<style scoped>
.active {
  font-weight: 600;
  text-decoration: underline;
}
</style>
