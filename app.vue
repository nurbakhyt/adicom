<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - Adicom` : "Adicom";
    },
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Adicom - это магазин натяжных потолков",
      },
    ],
  });
</script>
