<template>
  <div class="container mx-auto pt-28">

    <!-- Page Title -->
    <h1 class="text-4xl font-bold tracking-tight mb-4">
      Software I use, gadgets I love, and other things I recommend.
    </h1>

    <!-- Intro Paragraph -->
    <p class="text-lg text-gray-600 leading-relaxed mb-10">
      I get asked a lot about the things I use to build software, stay productive,
      or buy to fool myself into thinking I’m being productive when I’m really just procrastinating.<br><br>

      Here’s a big list of all of my favorite stuff.
    </p>

    <!-- CATEGORY SECTIONS -->
    <div
      v-for="section in uses"
      :key="section.title"
      class="mb-12"
    >
      <!-- Section Title -->
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">
        {{ section.title }}
      </h2>

      <!-- Items -->
      <ul class="list-none pl-0 space-y-3">
        <li
          v-for="item in section.items"
          :key="item.name"
          class="p-4 bg-white rounded-xl shadow-sm border border-gray-100"
        >
          <p class="font-medium text-gray-800">
            {{ item.name }}
          </p>

          <p
            v-if="item.description"
            class="text-sm text-gray-600 mt-1"
          >
            {{ item.description }}
          </p>
        </li>
      </ul>
    </div>

  </div>
</template>

<script setup>
const uses = [
  {
    title: "Workstation",
    items: [
      { name: "ASUS Vivobook Go 14 E1404FA Ryzen 5 7520U (2024)" },
      { name: "Lenovo Monitor L24m-4A 23.8\" IPS 100Hz (2024)" }
    ]
  },
  {
    title: "Development Tools",
    items: [
      { name: "Visual Studio Code" },
      { name: "Warp Terminal" }
    ]
  },
  {
    title: "Productivity",
    items: [
      { name: "Brave Browser" },
      { name: "Notion" },
      { name: "Microsoft 365" },
      { name: "Google Workspace" }
    ]
  },
  {
    title: "Design",
    items: [
      { name: "Figma" },
      { name: "Canva" }
    ]
  },
  {
    title: "Communication",
    items: [
      { name: "Google Meet" },
      { name: "Microsoft Teams" },
      { name: "Zoom" }
    ]
  }
];
</script>

<style scoped>
.active {
  font-weight: 600;
  text-decoration: underline;
}
</style>
